import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { setUserId } from '../Redux/ResultReducer';
import { useDispatch } from 'react-redux';
import "../Styles/Main.css"

const Main = () => {

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const startQuiz = () => {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value));
        }
    };

    return (
        <div className='container'>
            <h1 className='title text-light'>Who Know Me Better?</h1>
            
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>      
            </ol>

            <form id="form">
                <input ref={inputRef} type="text" placeholder='Username*' className='userid'/>
            </form>

            <div className='start'>
                <Link className='btn' to='/quiz' onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    )
}

export default Main;