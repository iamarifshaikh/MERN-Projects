import {useEffect,useState} from 'react'
import Questions from './Questions';
import { MoveNextQuestion,MovePreviousQuestion } from '../Hooks/FetchQuestion';
import { PushAnswer } from '../Hooks/SetResult';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Quiz = () => {

  const [check, setChecked] = useState(undefined);
  
  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch();

  const nextQuestion = () => {
    console.log("Here is a next question!")
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  };

  const previousQuestion = () => {
    if (trace > 0) {
      dispatch(MovePreviousQuestion());
    }
  };

  const onChecked = (check) => {
    console.log(check);
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Who Know Me Better?</h1>

      <Questions onChecked={onChecked} />

      <div className='grid'>
        {trace > 0 ? <button className='btn prev' onClick={previousQuestion}>Previous</button> : <div></div> }
        <button className='btn next' onClick={nextQuestion}>Next</button>
      </div>

    </div>
  );
};

export default Quiz;