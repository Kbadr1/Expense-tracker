import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="income-expense pb-4 pl-3 pr-3 row">
            <div className="box col-md-4 offset-md-4">
                <div className="row pt-3 pb-3">
                    <div className="box-element col-6">
                        <h5 className="text-center">Income</h5>
                        <h6 className="income-money text-center">${income}</h6>
                    </div>
                    <div className="box-element col-6">
                        <h5 className="text-center">Expense</h5>
                        <h6 className="expense-money text-center">${expense}</h6>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default IncomeExpenses
