import React ,{useContext}from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {

    const {deleteTranstion} = useContext(GlobalContext);
    
    return (
        <div key={transaction.id} className={`border-l-4 flex items-center justify-between rounded-sm bg-slate-200  pl-2 mt-2
             shadow-md hover:scale-105 transtion:all duration-300 group
             ${transaction.amount < 0 ? "border-red-500" : "border-green-500"}`}>

            <div>{transaction.text}</div>
            <div className='flex gap-2 items-center'>
                <div> {transaction.amount < 0 ? "-" : "+"}  ${Math.abs(transaction.amount)}</div>

                <button className=" group-hover:bg-slate-600 p-1 rounded-sm transtion:all duration-300"
                onClick ={()=>{deleteTranstion(transaction.id)}}>
                    <MdOutlineDeleteForever className='text-2xl' color='rgb(226,232,240)' />
                </button>
            </div>

        </div>
    )
}

export default Transaction