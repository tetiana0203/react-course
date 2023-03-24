import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { todoApp } from './components/reducers/reducers';

import TodoList from './components/TodoList/TodoList';

const App = () => {
  const store = createStore(todoApp);
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
