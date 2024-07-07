import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Expense } from "../(primary_display)/Display";

interface BarChartProps {
  expenses: Expense[];
}

interface ExpensesByCategory {
  [category: string]: number;
}

export const BarComponent = ({ expenses }: BarChartProps) => {
  //General Idea: hash all expense objects into new objects with the keys being the categories and the value being the sum of expense cost
  const convertHashToArray = () => {
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

  const expensesReducer = convertHashToArray();
  console.log(expensesReducer)

  return (
    <ResponsiveContainer width="100%" height="100%" className="mt-3">
      <BarChart width={200} height={200} data={expensesReducer} margin={{ right: 60 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"category"}></XAxis>
        <YAxis />
        <Legend />
        <Bar dataKey={"cost"} fill="#2563eb"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
