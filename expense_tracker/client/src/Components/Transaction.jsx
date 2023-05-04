import React, { useContext } from 'react'
import { GlobalContext } from '../Context/State';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);   
  const { id,amount, text } = transaction;
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? "minus" : "plus"}>{text}
        <span>{sign}$ {Math.abs(amount)}</span>
        <button className='delete-btn' onClick={()=>deleteTransaction(id)}>X</button>
    </li>
  )
}
export default Transaction;