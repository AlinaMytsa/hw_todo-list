import React, {useState} from 'react';

const Form = ({addTodos,deleteAllTodos}) => {
  const [title,setTitle] = useState({titleValue:'', isTitleValid: true});
  const [description,setDescription] = useState({descValue:'', isDescValid: true});

  const handleTitleChange = (e) =>{
    const initValue = e.target.value;
    if (!initValue){
     setTitle({titleValue: '',isTitleValid: false})
    } else {
      setTitle({titleValue: initValue, isTitleValid: true})
    }
    return initValue
  }

  const handleDescriptionChange = (e) =>{
    const initValue = e.target.value;
    if (!initValue){
      setDescription({descValue: '',isDescValid: false})
    } else {
      setDescription({descValue: initValue, isDescValid: true})
    }
    return initValue
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (title.titleValue.trim() === '' || description.descValue.trim() === ''){
      throw new Error('your input is empty')
    } else {
      addTodos(title.titleValue,description.descValue);
      setTitle({titleValue: '',isTitleValid: true});
      setDescription({descValue: '',isDescValid: true});
    }
  }

  const toClearTheForm = () =>{
    setTitle({titleValue: '',isTitleValid: true});
    setDescription({descValue: '', isDescValid: true});
  }

  return (
    <form id='todoForm' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Task title</label>
        <input onChange={handleTitleChange}
               value={title.titleValue}
               type='text'
               name='title'
               className='form-control'
               placeholder='Title'
               required/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Task body</label>
        <textarea onChange={handleDescriptionChange}
                  value={description.descValue}
                  name='description'
                  className='form-control'
                  placeholder='Task body'
                  cols='30'
                  rows='10'
                  required></textarea>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <input type='submit' className='btn btn-primary' value='Create task!'/>
          <input onClick={toClearTheForm} type='reset' className='btn btn-warning' value='Очистити'/>
        </div>
        <button onClick={deleteAllTodos} type='button' className='btn btn-danger remove-all'>Видалити все</button>
      </div>
    </form>
  );
};

export default Form;
