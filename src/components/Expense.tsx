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
    return <div className="border flex justify-between items-center ml-5 mr-5 h-12">

        <div>
            <p>{ExpenseObj.name}</p>
            <p>{ExpenseObj.category}</p>
        </div>
        <p>{ExpenseObj.cost}</p>
        {ExpenseObj.recvOrSend? <p>Receiving</p> : <p>Sending</p>}
    </div>
}