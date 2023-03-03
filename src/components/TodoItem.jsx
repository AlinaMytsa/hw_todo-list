import React from 'react';

const TodoItem = (props) => {

  return (
    <div className="taskWrapper">
      <div className="taskHeading">{props.name}</div>
      <div className="taskDescription">{props.description}</div>
      <hr/>
      <label className='completed form-check'>
        <input onChange={props.toggleTodoCompleted(props.id)} checked={props.completed} type='checkbox' className='form-check-input'/>
        <span>Завершено?</span>
      </label>
      <hr/>
      <button onClick={props.deleteTodo(props.id)} className='btn btn-danger delete-btn'>Видалити</button>
    </div>
  );
};

export default TodoItem;
