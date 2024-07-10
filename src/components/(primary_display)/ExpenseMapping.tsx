import ExpenseComponent from "../ExpenseComponent";
import { Balances, Expense } from "./Display";

interface ExpenseMappingProps {
  expenses: Expense[];
  setExpenseArray: (expenses: Expense[]) => void;
  setBalances: (updatedExpense: Balances) => void;
  balances: {
    incoming: number,
    outgoing: number,
    total: number
  }
}

export const ExpenseMapping = ({ expenses, setExpenseArray, setBalances, balances}: ExpenseMappingProps) => {
  const expenseArrayWithIDs = expenses.map((expense: Expense, id: number) => expense.id = id+1)

  function removeExpense(idToBeDeleted: number){
    //found the removed expense, now we need to extract its properties and change values accordingly
    const findRemovedExpense = expenses.find((expense: Expense) => expense.id === idToBeDeleted)
    //if the type is incoming, we should remove it from "incoming" and add back the amount to the total balance.
    if (findRemovedExpense?.type === "outgoing"){
      const updatedOutgoing = balances.outgoing - findRemovedExpense.cost;
      const updatedTotal = balances.total + findRemovedExpense.cost;
      setBalances({...balances, outgoing: updatedOutgoing, total: updatedTotal});
    }
    else if (findRemovedExpense?.type === "incoming"){
      const updatedIncoming = balances.incoming - findRemovedExpense.cost;
      const updatedTotal = balances.total - findRemovedExpense.cost
      setBalances({...balances, incoming: updatedIncoming, total: updatedTotal})
    }
    console.log(balances.total)

    const filteredExpenses = expenses.filter((expense: Expense) => expense !== findRemovedExpense)
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
