import React from "react";
import Todo from "./Todo";

function ToDoApp({
  todos,
  setTodos,
  deleteHandler,
  completeHandler,
  setEditTodo,
  editHandler,
  filteredTodos,
}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            setEditTodo={setEditTodo}
            editHandler={editHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
