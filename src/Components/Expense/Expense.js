import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [isDelay, setIsDelay] = useState(true);
  // const emailData = useSelector((state) => state.valid.id);
  // const emailValue = emailData[0].email
  const emailValue = localStorage.getItem("email");
  // console.log(emailValue);
  const emailSliced = emailValue.slice(0, -10);
  console.log(emailSliced);

  // const emailSlice = emailData[0].email.slice(0, -10);

  // console.log(emailSlice);
  // console.log(emailValue);
  // console.log(emailData);
  // const addExpenseHandler = (expense) => {
  //   // console.log(expense);
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  // setTimeout(function () {
  //   setIsDelay(false);
  // }, 8000);

  // console.log(isDelay);

  const addExpenseHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Expense;
