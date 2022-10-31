import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  const month = Number(props.date.slice(5, 7));
  const day = props.date.slice(8, 10);
  const year = props.date.slice(0, 4);

  console.log(month);

  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const displayMonth = [allMonths[month - 1]];
  // console.log(...displayMonth);

  return (
    <div className="expense-date">
      <div className="expense-date__day"> {day}</div>

      <div className="expense-date__month"> {displayMonth}</div>
      <div className="expense-date__year"> {year}</div>
    </div>
  );
};

export default ExpenseDate;
