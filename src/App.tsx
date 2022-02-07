import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Freelancer de website",
            type: 'deposit',
            category: 'dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: "Aluguel",
            type: 'withdraw',
            category: 'Casa',
            amount: 900,
            createdAt: new Date('2021-02-14 11:00:00')
          }
        ]
      })
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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}
