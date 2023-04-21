import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
                .filter(item => item>=0)
                .reduce((acc,item)=>(acc+=item),0)
                .toFixed(2);
  const expense = (amounts
                .filter(item => item<0)
                .reduce((acc,item)=>(acc+=item),0)*-1)
                .toFixed(2);

  return (
    <div className="flex justify-evenly  text-lg bg-slate-200 p-2 rounded-sm">
      <div className='flex flex-col'>
        <div>Income</div>
        <div className='text-green-500'>${income}</div>
      </div>
      <div className="w-[1px] opacity-50  bg-slate-500"></div>
      <div>
        <div>Expense</div>
        <div className='text-red-500'>${expense}</div>
      </div> </div>
  )
}

export default IncomeExpenses