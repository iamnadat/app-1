import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleClickHandler = () => {
    console.log("changeTitleOnClick");
    setTitle("updated");
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="iexpense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={changeTitleClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
