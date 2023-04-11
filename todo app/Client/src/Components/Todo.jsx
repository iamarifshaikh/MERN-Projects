import React from 'react';
import '../Style/Todo.css';

const Todo = ({ data,handleDelete,handleEdit }) => {
    const { _id, title, description } = data;
    return (
        <li className='list' key={_id}>
            <div className='todo'>
                <span className='title'>{title}</span>
                <span className='description'>{description}</span>
            </div>
            <div className='button-container'>
                <button name={_id} className='edit' onClick={handleEdit}>Edit</button>
                <button name={_id} className='delete' onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default Todo;