import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  // const header = useSelector((state) => state.valid.headerItems);
  const userLogin = useSelector((state) => state.valid.userIsLoggedIn);

  return (
    <div className={classes.header}>
      <h2>{userLogin ? "Welcome Boss" : "Expense Tracker"}</h2>
      {userLogin && (
        <ul>
          <li>
            <NavLink to="/expense" activeClassName={classes.active}>
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/task" activeClassName={classes.active}>
              Tasks
            </NavLink>
          </li>
        </ul>
      )}{" "}
    </div>
  );
};

export default Header;
