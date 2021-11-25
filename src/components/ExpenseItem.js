import "./ExpenseItem.css";

function ExpenseItem() {
  const today = new Date();
  const expenseDate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const expenseTitle = "Party";
  const expenseamount = 100000.00;

  return (
    <div className="expense-item ">
      <div>{expenseDate}</div>
      <div className="iexpense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseamount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
