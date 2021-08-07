// import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal  from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal/index';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransaction(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
            setIsNewTransactionModalOpen(false);
    }
  return (
    <>
    
    <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
    <Dashboard/>

    <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
    />

  <GlobalStyle/>
 
   
    </>
  );
}

