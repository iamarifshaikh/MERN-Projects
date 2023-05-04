import React,{useContext} from 'react'
import { GlobalContext } from '../Context/State';
import Transaction from './Transaction';

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext);
  
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}

export default TransactionList;