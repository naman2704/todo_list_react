import { useRef } from "react";

const TodoInput = ({ handleAddTodo, setTodoValue, todoValue, inputRef }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Add todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        ref={inputRef}
      />
      <button
        type="button"
        onClick={() => {
          handleAddTodo();
          inputRef.current.focus();
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
