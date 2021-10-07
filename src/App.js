import React, { useState, useEffect } from 'react';
import { todoRef } from './FireBase';
import './style.css';
import TypeBox from './TypeBox';
import TodoList from './TodoList';
import { getDocs } from 'firebase/firestore';

export default function App() {
  const [list, SetList] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const data = await getDocs(todoRef);
      SetList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTodo();
  }, [list]);
  return (
    <div className="app">
      <h2 className="caption">Todo App</h2>
      <TypeBox list={list} SetList={SetList} className="TypeBox" />
      <TodoList list={list} SetList={SetList} className="TodoList__1" />
    </div>
  );
}
