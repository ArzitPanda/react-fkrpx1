import React, { useState } from 'react';
import './style.css';
export default function TypeBox(props) {
  const [todo, setTodo] = useState('');
  function add(e) {
    if (e.key === 'Enter') {
      props.SetList([
        ...props.list,
        { id: new Date().getTime().toString(), todo: todo },
      ]);
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
      <div
        className="button_1"
        onClick={() => {
          props.SetList([
            ...props.list,
            { id: new Date().getTime().toString(), todo: todo },
          ]);
        }}
      >
        submit
      </div>
    </div>
  );
}
