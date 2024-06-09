import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Todoform from "./components/Todoform.jsx";
import Todoform from "./components/TodoForm";
import Todos from "./components/Todos";
import TodoItem from "./components/Todos/TodoItem";

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

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <Todos todos={todos} toggleCompleted={toggleCompleted} />
      </div>
      {/* <Todoform />
      <Todos todos={todos} /> */}
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
