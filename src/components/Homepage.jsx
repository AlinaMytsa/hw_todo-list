import React, {useState} from 'react';
import Form from "./Form";
import {nanoid} from "nanoid";
import TodoItem from "./TodoItem";

const Homepage = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (name, description) => {
    const newTodo = {id: nanoid(), name, description, completed: false};
    setTodos([newTodo, ...todos]);
  }

  const toggleTodoCompleted = (id) => () => {
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, completed:!todo.completed}
      }
      return todo

    })
    setTodos(updatedTodo)
  }

  const deleteTodo = (id) => () =>{
    const remainingTodo = todos.filter((todo) =>id !== todo.id)
    setTodos(remainingTodo)
  }

  const deleteAllTodos = () =>{
    setTodos([]);
  }

  const setTodoItem = todos.map((todo) => (
    <div className="col-4">
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        description={todo.description}
        completed={todo.completed}
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}>
        <div className="taskWrapper">
          <div className="taskHeading">{todo.name}</div>
          <div className="taskDescription">{todo.description}</div>
          <hr/>
          <label className='completed form-check'>
            <input checked={todo.completed}
                   type='checkbox'
                   className='form-check-input'

            />
            <span>Завершено?</span>
          </label>
          <hr/>
          <button className='btn btn-danger delete-btn'>Видалити</button>
        </div>
      </TodoItem>
    </div>
  ))

  return (
    <main>
      <h1 className='text-center mt-5 mb-5'>TODO LIST</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Form deleteAllTodos={deleteAllTodos} addTodos={addTodos}/>
          </div>
          <div className="col-8">
            <div className="row" id='todoItems'>
              {setTodoItem}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
