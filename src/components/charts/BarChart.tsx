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

export const BarComponent = ({ expenses }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="mt-3">
      <BarChart width={200} height={200} data={expenses} margin={{ right: 60 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"category"}></XAxis>
        <YAxis />
        <Legend />
        <Bar dataKey={"cost"} fill="#2563eb"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
