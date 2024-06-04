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
    name: "",
    category: "",
    cost: 0,
    recvOrSend: false,
  });
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [incomingBalance, setIncomingBalance] = useState<number>(0);
  const [outgoingBalance, setOutGoingBalance] = useState<number>(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //destructure the name and value from the event
    const { name, value } = event.target;
    setExpenseObj({ ...ExpenseObj, [name]: value });
  };

  return (
    <div className="flex flex-col border w-5/12 h-2/3 text-sm shadow-md">
      <div className="flex justify-between font-bold bg-slate-300 bg-opacity-20 ml-5 mr-5 mt-3 p-5">
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

      <div className="flex justify-between font-bold bg-slate-300 ml-5 mr-5 mt-3 p-5 text-sm bg-opacity-20">
        <div>
          <p>Incoming</p>
          <p className="text-blue-600 text-xl">US${incomingBalance}</p>
        </div>

        <div>
          <p>Outgoing</p>
          <p className="text-red-500 text-xl">US${outgoingBalance}</p>
        </div>
      </div>

      <div className="flex justify-between font-bold ml-5 mr-5 p-5 text-sm bg-opacity-20">
        <div>
          <p>History</p>
          <p className="text-blue-600 text-xl">US${incomingBalance}</p>
        </div>

        <div>
          <p>Outgoing</p>
          <p className="text-red-500 text-xl">US${outgoingBalance}</p>
        </div>
      </div>

      <Expense ExpenseObj={ExpenseObj}></Expense>
    </div>
  );
}
