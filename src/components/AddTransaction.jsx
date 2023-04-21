import React ,{useContext} from 'react'
import { useState } from 'react'
import  {GlobalContext}  from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction  } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  
  
   
  function submitHandler(event) {
    event.preventDefault();
    const newTranstion ={
      id: Math.floor(Math.random()*100000000),
      text:text,
      amount:+amount
    }

   addTransaction(newTranstion);
    setText('');
    setAmount(0);
  }
  return (
    <>
      <div >
        <h2 className="text-xl">Add new transaction</h2>
        <div className=" bg-slate-300 h-[1px]"></div>
      </div>
      <form className='flex flex-col gap-4 mt-5 w-full' onSubmit={submitHandler}>
        <label>
          <p className='text-lg'>Expense name *</p>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Name' required="required"
            className="outline-none border-2 border-slate-100 rounded-md p-0.5 focus:border-slate-400 w-[75%]
             transtion:all duration-300 mt-2"
          ></input>
        </label>

        <label>
          <p className='text-lg'>Expense amount  <br/>
            <span className='text-sm'>(negative - expense, positive - income)</span>
          </p>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount'
            className="outline-none border-2 border-slate-100 rounded-md p-0.5 focus:border-slate-400 w-[75%]
             transtion:all duration-300 mt-2"
          ></input>
        </label>

        <button className="p-2 bg-slate-300  rounded-sm hover:bg-violet-400 w-full
             transtion:all duration-300 ">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction