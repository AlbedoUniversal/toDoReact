import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context';
import AddTodo from './Todo/AddTodo';



function App() {


  // const todos = [                                       -- вид до useState;
  //   { id: 1, completed: false, title: 'Купить хлеб' },
  //   { id: 2, completed: false, title: 'Купить масло' },
  //   { id: 3, completed: false, title: 'Купить молоко' }
  // ]

  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' }
  ]);

  // чтобы определить state, за которым будет следить наш реакт, чтобы перерендыревать шаблон и добавлять динамики приложению; поэтому просто использовать переменную todos мы не можем. Для этого нам нужно воспользоваться специальной функцией REact-a, которая называется useState; Эта функция всегда нам возвращает массив, состоящий всегда из двух элементов: 1-элемент массива - это само состояние, а 2-элемент массива - это функция, позвлоляющая изменять данное состояние, для того, чтобы React видел данные изменения

  function toggleTodo(id) { // поэтому чтобы изменить наш массив , мы вызываем метод setTodos.
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([{
        title,
        id: Date.now(),
        completed: false

      }])
    )

  }


  return (
    <Context.Provider value={{ removeTodo }}> {/* для того, чтобы мне передвать определнные функции сквозь другие компоненты мне необходимо обернуть весь шаблон в специальный компонент, который называется Сontext.provider, в который могу передавать что угодно */}
      <div className="wrapper">
        <h1>TodoList on React</h1>
        <AddTodo onCreate={addTodo}></AddTodo>

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos!</p>}

      </div>
    </Context.Provider>
  )
}

export default App;
