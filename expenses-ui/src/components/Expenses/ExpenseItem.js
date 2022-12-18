import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //state for changing title with button
  const [title, newTitle] = useState(props.title);

  const clickHandler = () => {
    newTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title!</button>
    </Card>
  );
};

export default ExpenseItem;
