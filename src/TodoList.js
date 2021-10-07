import React, { useEffect } from 'react';
import './style.css';
import { FiXCircle } from 'react-icons/fi';
import { todoRef } from './FireBase';
import { doc, deleteDoc } from 'firebase/firestore';
export default function TodList(props) {
  useEffect(() => {
    props.list;
  }, [props.list]);
  async function deleteItem(id) {
    const todoVal = doc(todoRef, id);
    await deleteDoc(todoVal);
  }

  return (
    <div className="main_todo">
      {props.list.map((todos) => {
        return (
          <div className="TodoList">
            <h2>{todos.todo}</h2>
            <h2 className="time">{todos.date}</h2>
            <FiXCircle
              className="FiX"
              onClick={() => {
                deleteItem(todos.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
