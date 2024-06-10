import { useState } from "react";
import Expense from "./Expense";
import ExpenseForms from "./ExpenseForms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartPie,
  faClock,
  faGear,
  faMoneyBillTransfer,
  faPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import IO_Block from "./IncomingOutgoing";
import MenuButtons from "./MenuButtons";

interface Expense {
  name: string;
  category: string;
  cost: number;
  recvOrSend: boolean; //true = receiving, false = sending
}

export default function Display(): JSX.Element {
  const [ExpenseObj, setExpenseObj] = useState<Expense>({
    name: "",
    category: "",
    cost: 0,
    recvOrSend: false,
  });
  const [totalBalance, setTotalBalance] = useState<number>(0.0);
  const [incomingBalance, setIncomingBalance] = useState<number>(0);
  const [outgoingBalance, setOutGoingBalance] = useState<number>(0);
  const [expenseArray, setExpenseArray] = useState<Expense[]>([]);
  const [pageState, setPageState] = useState<string>("listView");

  const addExpense = () => {
    const resetExpense = {
      name: "",
      category: "",
      cost: 0,
      recvOrSend: false,
    };
    setExpenseArray([...expenseArray, ExpenseObj]);
    calculateBalance(ExpenseObj.recvOrSend);
    setExpenseObj(resetExpense);
  };

  const calculateBalance = (transactionType: boolean) => {
    if (transactionType === true) {
      setTotalBalance(totalBalance + ExpenseObj.cost);
      setIncomingBalance(incomingBalance + ExpenseObj.cost);
    } else if (transactionType === false) {
      setTotalBalance(totalBalance - ExpenseObj.cost);
      setOutGoingBalance(outgoingBalance + ExpenseObj.cost);
    }
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
    <div className="flex flex-col border w-5/12 h-3/4 text-sm shadow-md overflow-scroll">
      <div className="flex justify-between font-bold bg-slate-300 bg-opacity-20 ml-5 mr-5 mt-3 p-5 shadow-md">
        <p>Expense Tracker</p>

        <div className="w-16 flex justify-around">
          <button>
            <FontAwesomeIcon icon={faGear} size="xl" />
          </button>
          <button>
            <FontAwesomeIcon icon={faRightToBracket} size="xl" />
          </button>
        </div>
      </div>

      <div className="font-bold mt-5">
        <h4>Current Balance</h4>
        <h1 className="text-2xl opacity-60">US ${totalBalance.toFixed(2)}</h1>
      </div>

      <IO_Block
        incoming={incomingBalance}
        outgoing={outgoingBalance}
      ></IO_Block>
      <MenuButtons setPageState={setPageState}></MenuButtons>

      {pageState === "expenseForms" && (
        <ExpenseForms
          handleInput={handleInput}
          ExpenseObj={ExpenseObj}
        ></ExpenseForms>
      )}

      {pageState === "listView" && expenseArray.length ? (
        <div className="mt-5 flex flex-col h-auto over-flow mb-5">
          {expenseArray.map((expense: Expense) => (
            <Expense ExpenseObj={expense}></Expense>
          ))}
        </div>
      ) : pageState === "listView" && !expenseArray.length ? (
        <div className="text-3xl h-1/2 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" />
          <p className="mt-5">Add your first transaction!</p>
        </div>
      ) : null}
    </div>
  );
}
