import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ShowTodo from './Components/ShowTodo';
import CreateTodo from './Components/CreateTodo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<ShowTodo />} />
          <Route path='/create' element={<CreateTodo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
