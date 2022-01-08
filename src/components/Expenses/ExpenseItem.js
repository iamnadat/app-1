import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="iexpense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
