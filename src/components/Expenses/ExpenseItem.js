import React, { useState } from "react";
// import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  return (
    <div className="expense-item">
      {/*  i importing date from expensedate and use it here  */}

      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
};

export default ExpenseItem;
