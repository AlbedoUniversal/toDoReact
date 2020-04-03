import React from 'react'; // писать всегда при создании компонента
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
}

function TodoList(props) {// компоненты в React называют с большой буквы
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} /> //key нам необходим,чтобы реакт наиболее верно рендерил нам шаблон;  onToggle тоже придумано самостоятельно
      })}
    </ul>
  )
}

export default TodoList;