import React, { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "../api/api";
import "../styles/Home.css"; // Import CSS file
import logo from "../assets/logo.png";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Fetch to-do items on mount
  useEffect(() => {
    loadTodos();
  }, []);



  //get 
  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };



  //add
  const handleAddTodo = async () => {
    if (!text.trim()) return;
    const newTodo = await addTodo(text);
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setText(""); // Clear input
      window.alert("✅ Task added successfully!"); // Alert on Add
    }
  };


  //delete 
  const handleDeleteTodo = async (id) => {
    const deletedId = await deleteTodo(id);
    if (deletedId) {
      setTodos(todos.filter((todo) => todo._id !== deletedId));
      window.alert("❌ Task deleted successfully!"); // Alert on Delete
    }
  };

  return (
    <div className="todo-container">
      <img src={logo} alt="To-Do List" className="todo-logo" />

      <h1 className="todo-title">Todo List</h1>

      <div className="add-task-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo._id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
