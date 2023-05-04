import React,{useContext} from 'react'
import { GlobalContext } from '../Context/State';

const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  
  const total = amounts.reduce((accumulator, currentValue) => (accumulator += currentValue), 0).toFixed(2);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  )
}

export default Balance;