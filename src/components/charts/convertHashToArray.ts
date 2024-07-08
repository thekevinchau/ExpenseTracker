import { Expense } from "../(primary_display)/Display";
import { ExpensesByCategory } from "./BarChart";


//This function is intended to be used across all the plotting charts.
export const convertHashToArray = (expenses: Expense[]) => {
    const ExpensesByCategory = expenses.reduce((acc: ExpensesByCategory, expense: Expense) => {
      if(!acc[expense.category]){
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.cost
      return acc;
    }, {})
    const ExpensesByCategoryArray = Object.keys(ExpensesByCategory).map((category: string) => ({
      category,
      cost: ExpensesByCategory[category]
    }))
    return ExpensesByCategoryArray
  }
