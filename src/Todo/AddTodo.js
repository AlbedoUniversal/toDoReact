import React, { useState } from 'react';



function AddTodo({ onCreate }) { // принимаем это параметра в данный компонент
  const [value, setValue] = useState('');

  function submitHandler(event) { //принимает в себя event и мы делаем ему дефолтное значение, чтобы страница не перезагружалась
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('');
    }

  }
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit" >Add todo</button>
    </form>
  )

}


export default AddTodo