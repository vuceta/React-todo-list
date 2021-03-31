import React from "react";

function Form({ setInputText, submitToDoHandler, inputText, editTodo }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const deleteInputHandler = (e) => {
    setInputText(e.target.reset);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        {editTodo ? (
          <i className="fas fa-save"></i>
        ) : (
          <i className="fas fa-plus-square"></i>
        )}
      </button>
      <button onClick={deleteInputHandler} className="todo-button" type="reset">
        <i className="fas fa-minus-square"></i>
      </button>
      <div className="select"></div>
    </form>
  );
}

export default Form;
