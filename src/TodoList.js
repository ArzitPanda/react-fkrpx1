import React from 'react';
import './style.css';
import { FiXCircle } from 'react-icons/fi';
export default function TodList(props) {
  function deleteItem(id) {
    var newS = props.list.filter((elem) => elem.id !== id);
    props.SetList(newS);
  }
  function getTime() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time = today.getHours() + ':' + today.getMinutes();
    var dateTime = date + ' ' + time;
    return dateTime;
  }
  var time = getTime();
  return (
    <div className="main_todo">
      {props.list.map((todos) => {
        return (
          <div className="TodoList">
            <h2>{todos.todo}</h2>
            <h2 className="time">{time}</h2>
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
