import { useState, useEffect, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const isFirstRender = useRef(true);
  const inputRef = useRef(null);
  useEffect(() => {
    if (!localStorage) return;
    let todoData = localStorage.getItem("todos");
    if (!todoData) return;
    todoData = JSON.parse(todoData);
    if (!Array.isArray(todoData)) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTodos(todoData);
    } else {
      updateStorage();
    }
  }, [todos]);
  function updateStorage() {
    if (!localStorage) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function handleAddTodo() {
    if (todoValue.trim() === "") {
      alert("Please enter some todo!");
      return;
    }
    setTodos([...todos, todoValue]);
    setTodoValue("");
  }
  function handleDeleteTodo(todoIndex) {
    setTodos(
      todos.filter((todo, index) => {
        return index !== todoIndex;
      })
    );
  }
  function handleEditTodo(todoIndex) {
    const editTodo = todos.find((todo, index) => index === todoIndex);
    setTodoValue(editTodo);
    setTodos(
      todos.filter((todo, index) => {
        return index !== todoIndex;
      })
    );
  }
  return (
    <>
      <TodoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        inputRef={inputRef}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
