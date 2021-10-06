import React, { useState } from 'react';
import './style.css';
import TypeBox from './TypeBox';
import TodoList from './TodoList';

export default function App() {
  const [list, SetList] = useState([]);
  return (
    <div className="app">
      <h2 className="caption">Todo App</h2>
      <TypeBox list={list} SetList={SetList} className="TypeBox" />
      <TodoList list={list} SetList={SetList} className="TodoList__1" />
    </div>
  );
}
