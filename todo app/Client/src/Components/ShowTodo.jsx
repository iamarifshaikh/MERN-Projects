import React, { useState,useEffect } from 'react'
import Todo from './Todo';
import axios from 'axios';
import UpdateTodo from './UpdateTodo';
import { Link } from 'react-router-dom';
import '../Style/ShowTodo.css';

const ShowTodo = () => {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState("");
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:3000/todo')
            .then((res) => {
                console.log(res.data);
                setTodos(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const handleEdit = (event) => {
        setId(event.target.name);
        setOpen(true);
    };

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleClose = () => {
        setId("");
        setOpen(false)  
    };

    const handleDelete = (event) => {
        axios.delete(`http://localhost:3000/todo/${event.target.name}`);
        
        setTodos((element) => {
            return element.filter((todo) => todo._id !== event.target.name);
        });
    }; 

  return (
      <div className='container'>
          <div className='content'>
              <h2>Todo App</h2>              
            <Link to="/create"><button className='button'>New</button></Link>
              <ul>{todos.map((data,_id) => {
                  return (
                      <Todo _id={id} data={data} handleEdit={handleEdit} handleDelete={handleDelete}/>
                  )
              })}</ul>
          </div>          
          {open ? <div className='update-container'>
              <div className='update-content'>
                  <UpdateTodo _id={id} handleClose={handleClose} handleUpdate={handleUpdate} />
              </div>
          </div> : ""}
    </div>
  )
}

export default ShowTodo;