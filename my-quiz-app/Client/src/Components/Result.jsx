import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../Redux/QuestionReducer';
import { resetResultAction } from '../Redux/ResultReducer';
import '../Styles/Result.css';
import { attemptNumber,earnPointsNumber, flagResult } from '../Helper/Helper';
import { usePublishResult } from "../Hooks/SetResult"; 
  
const Result = () => {

  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

  useEffect(() => {
    console.log(flag);
  });

  const totalPoints = queue.length * 10;
  const attempts = attemptNumber(result);
  const earnPoints = earnPointsNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achieved: flag ? "Passed" : "Failed"
  });

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <div className='container'>
      <h1 className='title text-light'>Who Know Me Better?</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username:</span>
          <span>{userId}</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Point:</span>
          <span>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Questions:</span>
          <span>{ queue.length || 0 }</span>
        </div>
        <div className='flex'>
          <span>Total Attempts:</span>
          <span>{ attempts || 0 }</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points:</span>
          <span>{ earnPoints || 0 }</span>
        </div>
        {/* <div className='flex'>
          <span>Quiz Result:</span>
          <span style={{color:`${flag ? "#2AFF95" : "#FF2A66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div> */}
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