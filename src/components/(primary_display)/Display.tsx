import { useState } from "react";
import Expense from "../ExpenseComponent";
import ExpenseForms from "../(forms)/ExpenseForms";
import IO_Block from "./IncomingOutgoing";
import MenuButtons from "../(forms)/MenuButtons";
import ExpenseHeader from "./ExpenseHeader";
import { TotalBalance } from "./TotalBalance";
import { ChartDisplay } from "../charts/ChartDisplay";
import { ExpenseMapping } from "./ExpenseMapping";
import { EmptyTransaction } from "./EmptyTransactions";

export interface Expense {
  name: string;
  category: string;
  cost: number;
  type: string;
  id: number,
}
interface DisplayProps {
  toggleSettings: () => void;
  categories: string[];
}

const emptyExpense = {
  name: "",
  category: "",
  cost: 0,
  type: "",
  id: 0,
};

export default function Display({toggleSettings,categories,}: DisplayProps): JSX.Element {
  const [ExpenseObj, setExpenseObj] = useState<Expense>(emptyExpense);
  const [totalBalance, setTotalBalance] = useState<number>(0.0);
  const [incomingBalance, setIncomingBalance] = useState<number>(0);
  const [outgoingBalance, setOutGoingBalance] = useState<number>(450.00);
  const [expenseArray, setExpenseArray] = useState<Expense[]>([]);
  const [pageState, setPageState] = useState<string>("listView");
  const isExpenseArrayPopulated = pageState === "listView" && expenseArray.length > 0;
  const isValidExpense = ExpenseObj.name.length && ExpenseObj.category.length && ExpenseObj.cost && ExpenseObj.type.length > 0;


  const addExpense = () => {
    if (isValidExpense) {
      setExpenseArray([...expenseArray, ExpenseObj]);
      calculateBalance(ExpenseObj.type);
      setExpenseObj(emptyExpense);
      setPageState("listView");
    } else {
      alert("You must fill out all fields of this expense!");
    }
  };
  

  const calculateBalance = (transactionType: string) => {
    if (transactionType === "incoming") {
      setTotalBalance(totalBalance + ExpenseObj.cost);
      setIncomingBalance(incomingBalance + ExpenseObj.cost);
    } else if (transactionType === "outgoing") {
      setTotalBalance(totalBalance - ExpenseObj.cost);
      setOutGoingBalance(outgoingBalance + ExpenseObj.cost);
    }
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setExpenseObj({...ExpenseObj,[name]: value});
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpenseObj({...ExpenseObj, [name]: name === "cost" ? parseFloat(value) : value});
  };

  return (
    <div className="flex flex-col border w-5/12 h-2/3 text-sm shadow-2xl text-sky-900">
      <ExpenseHeader toggleSettings={toggleSettings}></ExpenseHeader>
      <TotalBalance totalBalance={totalBalance}></TotalBalance>
      <IO_Block incoming={incomingBalance} outgoing={outgoingBalance}></IO_Block>
      <MenuButtons setPageState={setPageState}></MenuButtons>
      {pageState === "expenseForms" && (
        <ExpenseForms handleInput={handleInput} handleSelect={handleSelect} addExpense={addExpense} ExpenseObj={ExpenseObj} categories={categories}></ExpenseForms>
      )}
      {pageState === "stats" && (
        <ChartDisplay expenses={expenseArray} ExpenseTypeObject={{incoming: incomingBalance, outgoing: outgoingBalance}}></ChartDisplay>
      )}
      {isExpenseArrayPopulated && pageState === "listView" && (<ExpenseMapping expenses={expenseArray} setExpenseArray={setExpenseArray} setIncomingBalance={setIncomingBalance} setOutGoingBalance={setOutGoingBalance} balances={{incoming: incomingBalance, total: totalBalance, outgoing: outgoingBalance}}></ExpenseMapping>
      )}
      {isExpenseArrayPopulated === false && pageState === "listView" && <EmptyTransaction></EmptyTransaction>}
    </div>
  );
}
