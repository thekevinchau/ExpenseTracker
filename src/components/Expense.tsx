/*
Expense Gameplan:

Step 1: Consider an object interface for an expense.
    - An expense has the following:
        - Type/Category: subscriptions, payment/credit, healthcare, etc. User should be able to type this in.
        - Expense name: ex. Dr. Driscoll's foot cream
        - Cost
        - Whether it is incoming or outgoing (money being paid to you or you paying money)
*/


interface ExpenseProps {
    ExpenseObj: {
        name: string,
        category: string,
        cost: number,
        recvOrSend: boolean, //true = receiving, false = sending
    }
}

export default function Expense({ExpenseObj}: ExpenseProps): JSX.Element{
    return <div>
        {ExpenseObj.name}
        {ExpenseObj.category}
        {ExpenseObj.cost}
        {ExpenseObj.recvOrSend? <p>Receiving</p> : <p>Sending</p>}
    </div>
}