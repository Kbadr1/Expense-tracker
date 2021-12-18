import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="income-expense">
      <div>
        <h4 className="text-center">Income</h4>
        <h5 className="positive">${income}</h5>
      </div>
      <div>
        <h4 className="text-center">Expense</h4>
        <h5 className="negative">${expense}</h5>
      </div>
    </div>
  );
};

export default IncomeExpenses;
