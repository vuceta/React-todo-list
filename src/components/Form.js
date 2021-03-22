import React from "react";

function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    console.log(inputTextHandler);
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: inputText }]);  //da li mogu ovde ostaviti ID da bude inputText
    setInputText("");
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
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select"></div>
    </form>
  );
}

export default Form;
