import "./TodoItem.css"

const TodoItem = ({ todo, onDeleteClick, onToggleDone }) => {

  const handleDeleteClick = () => {
    onDeleteClick(todo.id);
  };

  const handleToggleDone = () => {
    onToggleDone(todo.id);
  };
  

  return (
    <li className={`theTask ${todo.done ? "completed" : ""}`}  onClick={handleToggleDone} >
      <span className="taskText">{todo.title}</span>
      <button className="compBtn"><i class='fas fa-check-square'></i></button>
      <button onClick={handleDeleteClick}><i class="fas fa-trash"></i></button>
    </li>
  );
};

export default TodoItem;
