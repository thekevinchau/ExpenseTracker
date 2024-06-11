/*
Expense Gameplan:

Step 1: Consider an object interface for an expense.
    - An expense has the following:
        - Type/Category: subscriptions, payment/credit, healthcare, etc. User should be able to type this in.
        - Expense name: ex. Dr. Driscoll's foot cream
        - Cost
        - Whether it is incoming or outgoing (money being paid to you or you paying money)
*/


interface ExpenseProps {
    ExpenseObj: {
        name: string,
        category: string,
        cost: number,
        type: string, //true = receiving, false = sending
    }
}

export default function Expense({ExpenseObj}: ExpenseProps): JSX.Element{
    return <div className="flex justify-between bg-slate-300 ml-5 mr-5 mb-2 p-5 text-sm bg-opacity-20 shadow-md">
    <div>
      <p className="font-bold">{ExpenseObj.name}</p>
      <p className="text-xs ml-[-0.7rem]">{ExpenseObj.category}</p>
    </div>

    <div className="self-end">
      <p>${ExpenseObj.cost.toFixed(2)}</p>
      <p className="text-red-500 text-xl"></p>
    </div>
  </div>
}