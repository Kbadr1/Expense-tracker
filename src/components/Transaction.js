import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : "+";
    const amountColor = sign === "-" ? "red" : "green";
    return (
        <li>
            <p>
                {transaction.text}
                <span style={{color: amountColor}}>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>
                    <i className="fa fa-remove"></i>
                </button>
            </p>
        </li>
    )
}

export default Transaction
