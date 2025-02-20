import React from "react";

// import TransactionChart from "../Transactions/TransactionChart";
import TransactionList from "../Transaction/List";
import FinanceChart from "../Transaction/Chart";


const ExpenseTracker = () => {
  return (
    <>
      <FinanceChart/>
      <TransactionList/>
    </>
  );
};

export default ExpenseTracker;