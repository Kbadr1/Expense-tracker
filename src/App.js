import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="app container">
        <div className="row">
          <div className="col-lg-4">
            <Balance />
            <IncomeExpenses />
          </div>
          <div className="col-lg-4">
            <AddTransaction />
          </div>
          <div className="col-lg-4">
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
