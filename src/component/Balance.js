import React from "react";
import { useExpense } from "../ExpenseContext";

const Balance = () => {
  const { state } = useExpense();

  return (
    <div>
      <h2> Balnce</h2>
      <h3> Total Money: Rs {state.totalMoney} </h3>
      <h3> Total Spent: Rs {state.spent} </h3>
      <h3> Money Left: Rs {state.saving}</h3>
    </div>
  );
};

export default Balance;
