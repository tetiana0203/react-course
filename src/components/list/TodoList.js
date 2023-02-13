import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import "./TodoList.css";
class todoList extends Component {
  state = {
    addTodoValue: "",
    todoList: [
      {
        title: "Smth very important",
        id: 1,
        done: false,
      },
      {
        title: "Another very important thing",
        id: 2,
        done: false,
      },
      {
        title: "Ordinary thing",
        id: 3,
        done: true,
      },
    ],
  };
  getTime() {
    let d = new Date();
    var n = d.getTime();
    console.log(n);
    return n;
  }
  handleDelete = (todo) => {
    const todoList = this.state.todoList.filter((t) => {
      return t.id !== todo;
    });
    this.setState({ todoList });
  };

  handleDone = (todo) => {
    const todoList = [...this.state.todoList];
    todoList.map((t) => {
      if (t.id === todo.id) {
        t.done = !t.done;
      }
      return t;
    });
    this.setState({ todoList });
  };

  addNewTodo = (value) => {
    if (value) {
      const todoList = [...this.state.todoList];
      todoList.push({
        id: this.getTime(),
        title: value,
        done: false,
      });
      this.setState({ addTodoValue: "", todoList });
    } else {
      alert("Please Add Todo Text");
    }
  };

  render() {
    return (
      <div class="todo-main card px-3 col-md-8">
        <div className="card-body">
          <h3>ToDo List</h3>
          <AddTodo
            fooAddTodo={this.addNewTodo}
            addTodoValue={this.state.addTodoValue}
          />
          <div class="list-wrapper">
            <div className="d-flex flex-column todo-list">
              {this.state.todoList.map((todo, index) => (
                <div key={todo.id}>
                  <Todo
                    index={index + 1}
                    todo={todo}
                    fooDelete={this.handleDelete}
                    fooDoneDone={this.handleDone}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default todoList;
