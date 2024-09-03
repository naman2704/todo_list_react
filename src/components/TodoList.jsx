import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            todoIndex={index}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
