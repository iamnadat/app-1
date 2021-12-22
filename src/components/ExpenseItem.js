import "./ExpenseItem.css";

function ExpenseItem(props) {

  const month = props.date.toLocaleDateString('en-US',{month: 'long'});
  const day = props.date.toLocaleDateString('en-US',{day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-item ">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="iexpense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
