import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="add-transaction">
      <h2 className="title">Add new transaction</h2>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="text">Transaction title</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction..."
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="amount">
            Amount <small>(negative: expense, positive: income)</small>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
