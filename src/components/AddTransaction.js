import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div className="add-transaction row">
            <div className="col-md-4 offset-md-4">
                <h4>Add new transaction</h4>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="text">Transaction</label>
                        <br/>
                        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter transaction..."/>
                    </div>
                    <div>
                        <label htmlFor="amount">Amount  <span>(negative - expense, positive - income)</span></label>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..."/>
                    </div>
                    <button>Add transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction
