import { useEffect, useState } from 'react';
import { useFetchQuestion } from '../Hooks/FetchQuestion';
import { useSelector } from 'react-redux';

const Questions = ({ onChecked }) => {

    const [checked, setChecked] = useState(undefined);
    const [{ Loading, apiData, serverError }] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
  
    useEffect(() => {
        // console.log(questions);
    });
    
    const onSelect = (i) => {
        onChecked(i);
    };

    // if (Loading) return <h3 className='text-light'>Loading...</h3>
    if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error" }</h3>
    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {questions?.options.map((q, i) => (
                    <li key={i}>
                        <input
                            type="radio"
                            value={false}
                            name='options'
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)} />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className='check'></div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Questions;