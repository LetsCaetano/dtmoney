import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';


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


export function App() {
  return (
    <>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}
