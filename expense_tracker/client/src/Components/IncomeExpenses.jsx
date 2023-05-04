import React,{useContext} from 'react'
import { GlobalContext } from '../Context/State';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(currentValue => currentValue > 0)
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);

  const expense = (amounts
    .filter(currentValue => currentValue < 0)
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0) * -1)
    .toFixed(2);
  
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>$ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;