import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 01',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    });
  }
})

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        >
          Cadastrar Transação
      </Modal>
      <GlobalStyle/>
    </>
  );
}
