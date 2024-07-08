import ExpenseComponent from "../ExpenseComponent";
import { Expense } from "./Display";

interface ExpenseMappingProps {
  expenses: Expense[];
  setExpenseArray: (expenses: Expense[]) => void;
}

export const ExpenseMapping = ({ expenses, setExpenseArray }: ExpenseMappingProps) => {
  const expenseArrayWithIDs = expenses.map((expense: Expense, id: number) => expense.id = id+1)

  function removeExpense(idToBeDeleted: number){
    const filteredExpenses = expenses.filter((expense: Expense) => expense.id !== idToBeDeleted)
    setExpenseArray(filteredExpenses);
  }

  return (
    <div className="mt-5 flex flex-col h-auto overflow-scroll mb-5">
      {expenses.map((expense: Expense) => (
        <ExpenseComponent ExpenseObj={expense} key={expense.id} removeExpense={() => removeExpense(expense.id)}></ExpenseComponent>
      ))}
    </div>
  );
};
