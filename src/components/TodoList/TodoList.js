import {useState} from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { addTodo, deleteTodo, toggleTodoDone } from "../actions/actions";

import "./TodoList.css";

const TodoList = ({ todoList, onAddTodo, onDeleteTodo, onToggleTodoDone }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput) {
      const newTodo = {
        title: todoInput,
        id: uuid(),
        done: false,
      };
      onAddTodo(newTodo);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (todoId) => {
    onDeleteTodo(todoId);
  };

  const handleToggleTodoDone = (todoId) => {
    onToggleTodoDone(todoId);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <div action="" className="inputContents">
        <input  className="textField" placeholder="Add new todo" type="text" value={todoInput} onChange={handleInputChange} />
        <button className="addTask" onClick={handleAddTodo}><i class="fas fa-plus-square"></i></button>
      </div>

      <ul  className="Tasks">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteClick={handleDeleteTodo}
            onToggleDone={handleToggleTodoDone}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch(addTodo(todo)),
    onDeleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    onToggleTodoDone: (todoId) => dispatch(toggleTodoDone(todoId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
