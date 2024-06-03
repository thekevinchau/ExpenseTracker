import { useState } from "react";
import Expense from "./Expense";
import ExpenseForms from "./ExpenseForms";


interface Expense{
    name: string,
    category: string,
    cost: number,
    recvOrSend: boolean, //true = receiving, false = sending
}


export default function Display(): JSX.Element {
    const [ExpenseObj, setExpenseObj] = useState<Expense>({name: "", category: "", cost: 0, recvOrSend: false})


    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //destructure the name and value from the event
        const {name, value} = event.target;
        setExpenseObj({...ExpenseObj, [name]: value})
}

    return <div>
        <ExpenseForms handleInput={handleInput} ExpenseObj={ExpenseObj}></ExpenseForms>
        <Expense ExpenseObj={ExpenseObj}></Expense>
    </div>
}