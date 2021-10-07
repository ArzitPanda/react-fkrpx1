import React, { useState, useEffect } from 'react';
import './style.css';
import { addDoc } from 'firebase/firestore';
import { todoRef } from './FireBase';

export default function TypeBox(props) {
  function getTime() {
    var today = new Date();

    var time = today.getHours() + ':' + today.getMinutes();
    var dateTime = time;
    return dateTime;
  }
  var time = getTime();
  const [todo, setTodo] = useState('');
  const CreateTodo = async () => {
    await addDoc(todoRef, { todo: todo, date: time });

    setTodo('');
  };

  function add(e) {
    if (e.key === 'Enter') {
      CreateTodo();
    }
  }
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="name..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input"
        onKeyPress={(e) => {
          add(e);
        }}
      />
      <div className="button_1" onClick={CreateTodo}>
        submit
      </div>
    </div>
  );
}
