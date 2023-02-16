import React, { Component } from "react";
import TodoList from "../list/TodoList";
import "./Main.css";


class Main extends Component {
  
  render() {
    return (
      <main className="main-content">
        <div className="container">
          <p>
            Ullamco eu dolor reprehenderit minim velit labore in culpa ex
            deserunt deserunt esse do.Aute Lorem commodo ut amet do proident in
            non laborum Lorem esse.Veniam officia Lorem ea est non elit do Lorem
            sunt culpa dolor fugiat laborum.Id qui commodo laboris excepteur
            enim dolore ex laboris exercitation deserunt.Eu elit nulla dolor
            adipisicing enim incididunt elit est aliquip aliquip ea non magna
            ex.
          </p>
          <TodoList />
        </div>
      </main>
    );
  }
}
export default Main;
