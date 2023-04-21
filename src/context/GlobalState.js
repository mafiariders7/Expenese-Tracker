import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
const initialState = {
    transactions:[
        {id:1, text:'Flower' , amount: -20},
        {id:2, text:'Salary' , amount: 300},
        {id:3, text:'Books' , amount: -30},
        {id:4, text:'Camera' , amount: 150},
        {id:5, text:'Food' , amount: -40},
 
    ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    //
    function deleteTranstion(id) {
        dispatch({
            type:'DELETE_TRANSACTION', 
            payload:id
        });
    }

    function addTransaction(transactions){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transactions
        })
    }
    return ( 
        <GlobalContext.Provider value ={
            {transactions:state.transactions
             ,deleteTranstion
             ,addTransaction}
        }>
            {children}
        </GlobalContext.Provider>
    )
}