import React from 'react';
import './App.css';
import TodoApp_Can from "../containers/TodoApp_Can.jsx";
import store from "../containers/store";

import { Provider } from "react-redux";


class  App extends React.Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <TodoApp_Can className="todoapp" ></TodoApp_Can>
        </Provider>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="https://github.com/zhoushaokun/">ZSK</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

export default App;