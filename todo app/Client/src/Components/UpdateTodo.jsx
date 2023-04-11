import React, { useState } from 'react'
import axios from 'axios';
import '../Style/UpdateTodo.css';

const UpdateTodo = ({_id,handleClose,handleUpdate}) => {
    const [data, setData] = useState({ title: "", description: "" });

    const handleChange = (event) => {
        setData({...data,[event.target.name]: event.target.value})}
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log({ _id }, { data });

        axios.put(`http://localhost:3000/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message)
            }).catch((err) => {
                console.log("Failed to update")
            console.log(err.data.message)
        })
    }
    return (
    <div className='update-container'>
      <form
        className="update-content"
        onSubmit={(event) => {
          handleSubmit(event);
          handleUpdate();
          handleClose();
        }}
      >
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="input"
          onChange={handleChange}
        />
        <label htmlFor="description" className="label">
          Description
        </label>
        <input
            type="text"
          name="description"
          className="input"
          onChange={handleChange}
        />
        <button type="submit" className="Update">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateTodo;