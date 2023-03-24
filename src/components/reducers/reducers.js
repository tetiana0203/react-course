import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
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
    }
  ]
};

export function todoApp(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload.todo
        ]
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.todoId)
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.todoId) {
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo;
        })
      };
      
    default:
      return state;
  }
}