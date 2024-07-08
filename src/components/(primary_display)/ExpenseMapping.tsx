import ExpenseComponent from "../ExpenseComponent";
import { Expense } from "./Display";

interface ExpenseMappingProps {
    expenses: Expense[];
}


export const ExpenseMapping = ({expenses}: ExpenseMappingProps) => {
    return <div className="mt-5 flex flex-col h-auto overflow-scroll mb-5">
    {expenses.map((expense: Expense, id: number) => (
      <ExpenseComponent ExpenseObj={expense} key={id}></ExpenseComponent>
    ))}
  </div>
}