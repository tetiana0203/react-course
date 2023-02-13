import React, { Component } from "react";
class Todo extends Component {
  render() {
    return (
      <div className="todo-item">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultChecked={this.props.todo.done}
            onChange={() => this.props.fooDoneDone(this.props.todo)}
          />
        </div>
        <div className="item-text-b d-flex flex-row justify-content-between">
          <div>
            <span>{this.props.index}.</span>
            <span>{this.renderTodo()}</span>
          </div>
          <div className="text-center">
            <button
              className="btn btn-danger font-weight-bold "
              onClick={() => this.props.fooDelete(this.props.todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderTodo() {
    if (this.props.todo.done) return <s>{this.props.todo.title}</s>;
    else return this.props.todo.title;
  }
}
export default Todo;
