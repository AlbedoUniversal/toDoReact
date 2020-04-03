import React, { useContext } from 'react';
import Context from '../Context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    broderRadius: '4px',
    marginBottom: '.5rem',
    boxShadow: '0px 1px 4px 1px #8d888875',
    background: 'white'
  },
  input: {
    marginRight: '1rem'
  }
}

export default function TodoItem({ todo, index, onChange }) { // название onChange придумано самостоятельно; Чтобы передавать данное событие в родительский элемент, поэтому мы и принмамем тут функцую ончэндж
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input style={styles.input} type="checkbox" onChange={() => onChange(todo.id)} checked={todo.completed} />
        {index + 1}
        &nbsp;
        {todo.title}
      </span>
      <button className="btnDelete" onClick={() => removeTodo(todo.id)}>&times;</button>  {/* or removeTodo.bind(null, todo.id)   */}
    </li>
  )
}