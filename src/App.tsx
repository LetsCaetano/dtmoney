import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
  models: {
    transaction: Model,
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction',data);
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
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle/>
    </>
  );
}
