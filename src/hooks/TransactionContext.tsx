import { createContext, useEffect, useState,ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Transaction{
    id:number,
    title:string,
    categoria:string,
    type:string,
    valor:number,
    createdAt:string,
}

interface TransactionsProviderProps{
    children:ReactNode
}

type TransactionInput=Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData{
    transactions:Transaction[],
    createTransaction:(transaction:TransactionInput)=>Promise<void>;
}

const TransactionContext= createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){

    const [transactions,setTransactions]=useState<Transaction[]>([])
    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    },[])

async function createTransaction(transactionInput:TransactionInput){
    const response=await api.post('/transactions',{
        ...transactionInput,
        createdAt:new Date()
    });
    const {transaction}=response.data;

    setTransactions([
        ...transactions,
        transaction
    ]);
}

    return (
        <TransactionContext.Provider value={{transactions,createTransaction}}>
        {children}
        </TransactionContext.Provider>
    )

}

export function useTransiction(){
    const context=useContext(TransactionContext);

    return context;
}

