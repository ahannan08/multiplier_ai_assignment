import express from "express";
import { addTodo, deleteTodo, getTodo } from "../controllers/controllers.js";

const router = express.Router();

// Define routes
router.post("/add", addTodo);
router.get("/get", getTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
