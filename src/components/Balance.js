import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const [balanceColor, setBalanceColor] = useState("");
  const [sign, setSign] = useState("");

  useEffect(() => {
    if (total > 0) {
      setBalanceColor("positive");
      setSign("+");
    } else if (total < 0) {
      setBalanceColor("negative");
      setSign("-");
    } else {
      setBalanceColor("zero");
      setSign("");
    }
  }, [total]);

  return (
    <div className="balance">
      <h2 className="title">Your balance</h2>
      <h2 className={`total ${balanceColor}`}>
        {sign} ${Math.abs(total)}
      </h2>
    </div>
  );
};

export default Balance;
