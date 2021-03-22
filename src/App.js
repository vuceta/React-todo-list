import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoApp from "./components/ToDoApp";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>ToDo App </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoApp setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
