import React from "react";

function Todo({ text, todo, deleteHandler, completeHandler, editHandler }) {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => editHandler(todo)} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={() => completeHandler(todo)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler(todo)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
