
import './App.css';
import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState.js';
function App() {
  return (
    <GlobalProvider>
      <div className="h-[100vh] w-[100vw] flex items-center justify-center lg:mt-16 " >
        <div className="flex flex-col gap-3 lg:w-5/12  md:w-7/12 sm:w-9/12">
          <Header />
          <div className="flex flex-col gap-4">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;
