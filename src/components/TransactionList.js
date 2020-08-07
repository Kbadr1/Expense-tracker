import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import Transaction from './Transaction';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className="transaction-list pb-3 row">
            <div className="col-md-4 offset-md-4">
                <h4>History</h4>
                <ul>
                    {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} /> )}
                </ul>
                <hr/>
            </div>
        </div>
    )
}

export default TransactionList
