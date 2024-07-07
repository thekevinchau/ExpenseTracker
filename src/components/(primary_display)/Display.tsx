import { useState } from "react";
import Expense from "../Expense";
import ExpenseForms from "../(forms)/ExpenseForms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import IO_Block from "./IncomingOutgoing";
import MenuButtons from "../(forms)/MenuButtons";
import ExpenseHeader from "./ExpenseHeader";
import { TotalBalance } from "./TotalBalance";
import { ChartDisplay } from "../charts/ChartDisplay";


export interface Expense {
  name: string;
  category: string;
  cost: number;
  type: string; //true = receiving, false = sending
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
};

export default function Display({
  toggleSettings,
  categories,
}: DisplayProps): JSX.Element {
  const [ExpenseObj, setExpenseObj] = useState<Expense>(emptyExpense);
  const [totalBalance, setTotalBalance] = useState<number>(0.0);
  const [incomingBalance, setIncomingBalance] = useState<number>(0);
  const [outgoingBalance, setOutGoingBalance] = useState<number>(0);
  const [expenseArray, setExpenseArray] = useState<Expense[]>([]);
  const [pageState, setPageState] = useState<string>("listView");
  const isExpenseArrayPopulated = pageState === "listView" && expenseArray.length > 0;
  const isValidExpense = (ExpenseObj.name.length > 0 && ExpenseObj.category.length > 0 && ExpenseObj.cost !== 0 && ExpenseObj.type.length > 0)

  const addExpense = () => {
    if (isValidExpense){
      setExpenseArray([...expenseArray, ExpenseObj]);
      calculateBalance(ExpenseObj.type);
      setExpenseObj(emptyExpense);
      setPageState("listView");
    }
    else{
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
    setExpenseObj({
      ...ExpenseObj,
      [name]: value,
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //destructure the name and value from the event
    const { name, value } = event.target;
    setExpenseObj({
      ...ExpenseObj,
      [name]: name === "cost" ? parseFloat(value) : value,
    });
  };

  return (
    <div className="flex flex-col border w-5/12 h-3/4 text-sm shadow-2xl text-sky-900">
      <ExpenseHeader toggleSettings={toggleSettings}></ExpenseHeader>
      <TotalBalance totalBalance={totalBalance}></TotalBalance>
      <IO_Block
        incoming={incomingBalance}
        outgoing={outgoingBalance}
      ></IO_Block>
      <MenuButtons setPageState={setPageState}></MenuButtons>

      {pageState === "expenseForms" && (
        <ExpenseForms
          handleInput={handleInput}
          handleSelect={handleSelect}
          addExpense={addExpense}
          ExpenseObj={ExpenseObj}
          categories={categories}
        ></ExpenseForms>
      )}
      {pageState === "stats" && <ChartDisplay expenses={expenseArray}></ChartDisplay>}

      {isExpenseArrayPopulated && pageState === "listView" && (
        <div className="mt-5 flex flex-col h-auto overflow-scroll mb-5">
          {expenseArray.map((expense: Expense, id: number) => (
            <Expense ExpenseObj={expense} key={id}></Expense>
          ))}
        </div>
      )}

      {isExpenseArrayPopulated === false && pageState === "listView" && (
        <div className="text-3xl h-1/2 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" />
          <p className="mt-5">Add your first transaction!</p>
        </div>
      )}
    </div>
  );
}
