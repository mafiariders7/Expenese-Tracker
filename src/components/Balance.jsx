import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

 
const Balance = () => {
  
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts
                .reduce((acc,item)=>(acc+=item),0)
                .toFixed(2);

  return (
    <div className="flex flex-col">
        <h1 className="text-xl">Your Balance</h1>
        <h1 id= 'balance' className="text-3xl">${total}</h1>
    </div>
  )
}

export default Balance