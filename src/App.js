
// import React from "react";
// import Balance from "./component/Balance";
// import ExpenseList from "./component/ExpenseList";
// import ExpenseForm from "./component/ExpenseForm";
// import { ExpenseProvider } from "./ExpenseContext";

// export default function App() {
//   return (
//     <ExpenseProvider>
//       <h1> Expense Tracker </h1>
//       <Balance />
//       <ExpenseList />
//       <ExpenseForm />
//     </ExpenseProvider>
//   );
// }

import './App.css';
import { Budget } from './components/Budget';
import { Remaining } from './components/Remaining';
import { SpentSoFar } from './components/SpentSoFar';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './components/context/AppContext';

function App() {
  return (
    <AppProvider>
        <div className="container">
        <h1 className='mt-3'> My Budget Planner:</h1>
        <div className='row mt-3'>
            <div className='col mt-3'>
              <Budget></Budget>
            </div>
            <div className='col mt-3'>
            <Remaining></Remaining>
            </div>
            <div className='col mt-3'>      
              <SpentSoFar></SpentSoFar>
            </div>
        </div>
        <div>
            <ExpenseList></ExpenseList>
        </div>
        <div className='mt-3'>
            <AddExpenseForm></AddExpenseForm>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
