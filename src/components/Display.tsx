import { useState } from "react";
import Expense from "./Expense";
import ExpenseForms from "./ExpenseForms";

interface Expense {
  name: string;
  category: string;
  cost: number;
  recvOrSend: boolean; //true = receiving, false = sending
}

export default function Display(): JSX.Element {
  const [ExpenseObj, setExpenseObj] = useState<Expense>({
    name: "Pedicure",
    category: "Self-care",
    cost: 45.0,
    recvOrSend: false,
  });
  const [totalBalance, setTotalBalance] = useState<number>(0.00);
  const [incomingBalance, setIncomingBalance] = useState<number>(0);
  const [outgoingBalance, setOutGoingBalance] = useState<number>(0);
  const [expenseArray, setExpenseArray] = useState<Expense[]>([]);

  const addExpense = () => {
    const resetExpense = {
        name: "",
        category: "",
        cost: 0,
        recvOrSend: false
    }
    setExpenseArray([...expenseArray, ExpenseObj]);
    calculateBalance(ExpenseObj.recvOrSend);
    setExpenseObj(resetExpense);

  }

  const calculateBalance = (transactionType: boolean) => {
    transactionType === true ? setTotalBalance((totalBalance + ExpenseObj.cost)) : setTotalBalance(totalBalance - ExpenseObj.cost);
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //destructure the name and value from the event
    const { name, value } = event.target;
    setExpenseObj({ ...ExpenseObj, [name]: value });
  };


  return (
    <div className="flex flex-col border w-5/12 h-3/4 text-sm shadow-md overflow-scroll">
      <div className="flex justify-between font-bold bg-slate-300 bg-opacity-20 ml-5 mr-5 mt-3 p-5 shadow-md">
        <p>Expense Tracker</p>

        <div>
          <button className="mr-5">Min</button>
          <button>Logout</button>
        </div>
      </div>

      <div className="font-bold mt-5">
        <h4>Current Balance</h4>
        <h1 className="text-2xl opacity-60">US ${totalBalance}</h1>
      </div>

      <div className="flex justify-between font-bold bg-slate-300 ml-5 mr-5 mt-3 p-5 text-sm bg-opacity-20 shadow-md">
        <div>
          <p>Incoming</p>
          <p className="text-blue-600 text-xl">US${incomingBalance}</p>
        </div>

        <div>
          <p>Outgoing</p>
          <p className="text-red-500 text-xl">US${outgoingBalance}</p>
        </div>
      </div>

      <div className="flex justify-between font-bold ml-5 mr-5 mt-2 text-sm bg-opacity-20">
        <div>
          <p>History</p>
          <p>Current Month</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col h-auto over-flow mb-5">
        {expenseArray.map((expense: Expense) => (
          <Expense ExpenseObj={expense}></Expense>
        ))}
        <button onClick={addExpense}>sum</button>
      </div>
    </div>
  );
}
