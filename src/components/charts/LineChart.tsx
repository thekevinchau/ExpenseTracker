import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Expense } from "../(primary_display)/Display"
import { convertHashToArray } from "./convertHashToArray"


interface LineChartProps{
    expenses: Expense[]
}

export const LineChartComponent = ({expenses}: LineChartProps) => {
    const expensesReducer = convertHashToArray(expenses);

    return <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart width={200} height={200} data={expensesReducer} margin={{ right: 60 }}>
            <CartesianGrid strokeDasharray={"3 3"}/>
            <XAxis dataKey={"category"}/>
            <YAxis/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" activeDot={{r:8}}/>
            <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
}