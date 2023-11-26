import React from 'react';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

export const SpentSoFar = () => {

  const {expenses} = useContext(AppContext);

  function calculateSpentSoFar(){
    let totalExpenses = expenses.reduce((acc,curr)=>{
        acc+=curr.cost;
        return acc;
    },0);
    return totalExpenses;
  }
  return (
    <div className='alert alert-primary'>
      <span>Spent So Far : Rs {calculateSpentSoFar()}</span>
    </div>
  )
}