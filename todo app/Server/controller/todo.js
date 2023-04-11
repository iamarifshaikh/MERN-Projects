import {Todo} from '../model/todo.js';

export const getAllTodo = (req, res) => {
    Todo.find()
        .then(todos => {
            res.status(200).json(todos);
        }).catch(err => {
            res.status(500).json({ message: "Todo not found", error: err.message });
        });
};

export const createTodo = (req, res) => {
    Todo.create(req.body)
        .then(data => {
            res.status(201).json({message:"Todo created successfully",data})
        })
        .catch(err => {
            res.status(500).json({ message: "Todo not created", error: err.message });
        });
};

export const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.status(200).json({ message: "Todo updated successfully", data })
        })
        .catch(err => {
            res.status(500).json({ message: "Todo not updated", error: err.message });
        });
};

export const deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body, { new: true })
        .then(data => {
            res.status(200).json({ message: "Todo deleted successfully", data })
        })
        .catch(err => {
            res.status(500).json({ message: "Todo not deleted", error: err.message });
        });
};