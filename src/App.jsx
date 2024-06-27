import { useState, createContext } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Todoform from "./components/Todoform.jsx";
import Todoform from "./components/TodoForm";
import Todos from "./components/Todos";
import TodoItem from "./components/Todos/TodoItem";

export const TodoContext = createContext();

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoContext.Provider value={{ addTodo, toggleCompleted, deleteTodo }}>
        <div style={styles.container}>
          <h1 style={styles.title}>My Todo List</h1>
          <Todoform addTodo={addTodo} />
          <Todos
            todos={todos}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        </div>
      </TodoContext.Provider>
    </>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
