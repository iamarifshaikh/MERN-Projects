import React from 'react';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';
import { resetAllAction } from '../Redux/QuestionReducer';
import { resetResultAction } from '../Redux/ResultReducer';
import '../Styles/Result.css';

const Result = () => {

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username:</span>
          <span>Arif Shaikh</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Point:</span>
          <span>50</span>
        </div>
        <div className='flex'>
          <span>Total Questions:</span>
          <span>50</span>
        </div>
        <div className='flex'>
          <span>Total Attempts:</span>
          <span>50</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points:</span>
          <span>50</span>
        </div>
        <div className='flex'>
          <span>Quiz Result:</span>
          <span>Passed</span>
        </div>
      </div>
      
      <div className="start">
        <Link className='btn' to='/' onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable />
      </div>

    </div>
  )
}

export default Result;