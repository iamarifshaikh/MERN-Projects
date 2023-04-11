import express from 'express';
import { getAllTodo, createTodo, updateTodo, deleteTodo } from '../controller/todo.js';
const router = express.Router();

/**
 * @route GET /todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);

/**
 * @route POST /todo
 * @description add a new todo
 * @access public
 */
router.post('/', createTodo);

/**
 * @route PUT /todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", updateTodo);

/**
 * @route DELETE /todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo);

export default router;