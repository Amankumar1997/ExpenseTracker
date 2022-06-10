import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //  here i group together our form states by using object in usestate
  // const [userInput, setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  // })

  //   onchange handler for title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value,}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // whenever your current state is dpend on prevois state
    // use this method prevstate is automaticlayy provided by react
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value,}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,

    //   })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value,}
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // combine alll user eneterd data jo bhi user ne data data hai get kr rahe hai
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // child compo call paren componet here props.onSaveExpenseData
    props.onSaveExpenseData(expenseData)
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
   
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
