const TodoCard = ({
  children,
  handleDeleteTodo,
  handleEditTodo,
  todoIndex,
}) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          type="button"
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
