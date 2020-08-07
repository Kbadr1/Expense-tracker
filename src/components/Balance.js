import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance pb-3 row pb-4">
            <div className="col-md-4 offset-md-4">
                <h4>Your Balance</h4>
                <h2>${total}</h2>
            </div>
        </div>
    )
}

export default Balance
