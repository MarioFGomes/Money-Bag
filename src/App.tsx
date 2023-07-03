import {GlobalStyle} from './style/global'
import {Header} from './Components/Header'
import {Dashboard} from './Components/Dashboard'
import { useState } from 'react';
import {NewTransactionModal} from './Components/NewTransactionModal'
import {TransactionsProvider } from './hooks/TransactionContext';



export function App() {

  const [isnewTransactionModalopen, setIsnewTransactionModalopen]=useState(false);

function handleOpenNewTransactionModalopen(){
    setIsnewTransactionModalopen(true);
}

function handleCloseNewTransactionModalopen(){
    setIsnewTransactionModalopen(false);
}


  return (  
      <TransactionsProvider>
        <Header OnopenTransictionModal={handleOpenNewTransactionModalopen}/>
        <Dashboard />
        <NewTransactionModal IsOpen={isnewTransactionModalopen}
        onRequestClose={handleCloseNewTransactionModalopen}/>
        <GlobalStyle />
      </TransactionsProvider>
  
  )
}
