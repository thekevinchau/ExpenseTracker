import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Expense } from "../(primary_display)/Display";
import { convertHashToArray } from "./convertHashToArray";

interface BarChartProps {
  expenses: Expense[];
}

export interface ExpensesByCategory {
  [category: string]: number;
}

export const BarComponent = ({ expenses }: BarChartProps) => {
  const expensesReducer = convertHashToArray(expenses);
  console.log(expensesReducer)

  return (
    <ResponsiveContainer width="100%" height="100%" className="mt-3">
      <BarChart width={200} height={200} data={expensesReducer} margin={{ right: 60 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"category"}></XAxis>
        <YAxis />
        <Legend />
        <Bar dataKey={"cost"} fill="#2563eb"></Bar>
        <Tooltip/>
      </BarChart>
    </ResponsiveContainer>
  );
};
