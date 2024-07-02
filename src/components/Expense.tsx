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
    name: string;
    category: string;
    cost: number;
    type: string;
  };
}

export default function Expense({ ExpenseObj }: ExpenseProps): JSX.Element {

  const outgoingTextStyle = "text-red-600";
  const incomingTextStyle = "text-green-500";

  return (
    <div className="ml-5 mr-5 flex">
      <div className="w-full">
        <p className="font-bold flex">{ExpenseObj.name}</p>
        <div className="flex justify-between">
          <p>{ExpenseObj.category}</p>
          <p className={ExpenseObj.type === "incoming" ? incomingTextStyle : outgoingTextStyle}>${ExpenseObj.cost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
