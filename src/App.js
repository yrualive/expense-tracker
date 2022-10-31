import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Components/Header/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Expense from "./Components/Expense/Expense";
import Graphs from "./Components/Graphs/Graphs";

const App = () => {
  const userLogin = useSelector((state) => state.valid.userIsLoggedIn);

  return <Registration />;
};

export default App;
