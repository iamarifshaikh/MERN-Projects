import React, { useState } from 'react'
import axios from 'axios';
import '../Style/CreateTodo.css'

const CreateTodo = () => {
    const [data, setData] = useState({ title: "", description: "" });

    const handleChange = (event) => {
        setData((data)=> ({ ...data, [event.target.name]: event.target.value }));  
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const todo = {
            title: data.title,
            description: data.description,
        }
        
        axios.post('http://localhost:3000/todo/', todo)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            }).catch((err) => {
                console.log("Error couldn't create Todo")
                console.log(err);
            });
    };

  return (
      <div className='modal-container'>
          <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="title">Title</label>
                  <input type="text" name='title' value={data.title} onChange={handleChange}/>
                  <label htmlFor="description">Description</label>
                  <input type="text" name='description' value={data.description} onChange={handleChange}/>
                  <button className='addTask' type='submit'>Add</button>
              </form>
          </div>
    </div>
  )
}

export default CreateTodo;