import React from "react";

function Form({
  setInputText,
  submitToDoHandler,
  inputText,
  editTodo,
  statusHandler,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const deleteInputHandler = (e) => {
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Type text here"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        {editTodo ? (
          <i className="fas fa-save"></i>
        ) : (
          <i className="fas fa-plus-square"></i>
        )}
      </button>
      <button
        onClick={deleteInputHandler}
        className="todo-button"
        type="button"
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
