/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoApp from "./components/ToDoApp";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //edit
  const editHandler = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInputText(editTodo.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodo]);

  // delete
  const deleteHandler = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // add
  const submitToDoHandler = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
      setInputText("");
    } else {
      updateTodo(inputText, editTodo.id, editTodo.completed);
    }
  };

  // completed
  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //filter
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

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
        submitToDoHandler={submitToDoHandler}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setStatus={setStatus}
        statusHandler={statusHandler}
        filterHandler={filterHandler}
      />
      <ToDoApp
        setTodos={setTodos}
        todos={todos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        setEditTodo={setEditTodo}
        editHandler={editHandler}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
