import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  // child to parent communication
  // this fuction will be called from ExpenseForm component to get data from it
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log("NewExpense.js",expenseData);
    
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
