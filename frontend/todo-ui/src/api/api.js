import axios from "axios";
const API_URL = "http://localhost:3000/todo"; // Adjust based on backend



export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos", error);
    return [];
  }
};

export const addTodo = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { text });
    console.log("added")
    return response.data;
  } catch (error) {
    console.error("Error adding todo", error);
    return null;
  }
};


export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    console.log("deleted")
    return id;
  } catch (error) {
    console.error("Error deleting todo", error);
    return null;
  }
};
