import React, { createContext, useReducer, useContext } from "react";

const ExpenseContext = createContext();

const initialState = {
  totalMoney: 200000,
  spent: 0,
  saving: 200000,
  transaction: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const newSpent = state.spent + action.payload.amount;
      const newSaving = state.saving - action.payload.amount;
      const newTransaction = {
        id: state.transaction.length + 1,
        description: action.payload.description,
        amount: action.payload.amount
      };
      return {
        ...state,
        spent: newSpent,
        saving: newSaving,
        transaction: [...state.transaction, newTransaction]
      };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("newExpense must be used within an ExpenseProvider");
  }
  return context;
};
