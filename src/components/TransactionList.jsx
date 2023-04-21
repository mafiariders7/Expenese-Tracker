import React, { useContext } from 'react'

import Transaction from './Transaction.jsx';
import { GlobalContext } from '../context/GlobalState';
const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);
  //  console.log(transactions);

  return (
    <div>
      <h3 className='text-2xl mb-3'>History</h3>
      {
        transactions.length === 0 ? <div className='text-lg text-slate-500'>No Transactions</div>
          : (
            <div>

              <ul id="list" className="list">
                {transactions.map((transaction) => (
                  <Transaction transaction={transaction} key={transaction.id} />
                ))}

              </ul>

            </div>
          )
      }



    </div>
  )
}

export default TransactionList