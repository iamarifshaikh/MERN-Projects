import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../Context/State';

const AddTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const inputRef = useRef(null);
  const { addTransaction } = useContext(GlobalContext); 

  const submitTransaction = event => {
    event.preventDefault();
    const transactionData = {
      id: new Date().getTime().toString(),
      text,
      amount:+amount
    }
    addTransaction(transactionData);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={submitTransaction}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id='text'
            placeholder='Enter text...'
            ref={inputRef}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder='Enter amount...'
            ref={inputRef}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;