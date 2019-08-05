import React from 'react';
import './App.css';
import TodoApp from "./TodoApp.jsx";
import Constants from "./constants.js";

class  App extends React.Component {
  componentDidMount() {
    // 路由的设置
  }

  render() {
    return (
      <div className="App">
        <TodoApp className="todoapp"></TodoApp>
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