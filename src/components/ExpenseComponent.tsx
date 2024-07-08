import { Expense } from "./(primary_display)/Display";

interface ExpenseProps {
  ExpenseObj: Expense
  removeExpense: (idToBeDeleted: number) => void;
}
const outgoingTextStyle = "text-red-600";
const incomingTextStyle = "text-green-500";
export default function ExpenseComponent({
  ExpenseObj, removeExpense
}: ExpenseProps): JSX.Element {
  return (
    <div className="ml-5 mr-5 mt-1 flex bg-slate-50 h-14 items-center border border-gray-300">
      {ExpenseObj.id};
      <div className="w-full pl-2 pr-2">
        <p className="font-bold flex">{ExpenseObj.name}</p>
        <div className="flex justify-between">
          <p className="italic">{ExpenseObj.category}</p>
          <p
            className={
              ExpenseObj.type === "incoming"
                ? incomingTextStyle
                : outgoingTextStyle
            }
          >
            ${ExpenseObj.cost.toFixed(2)}
          </p>
        </div>
      </div>
      <button onClick={() => removeExpense(ExpenseObj.id)}>hello</button>
    </div>
  );
}
