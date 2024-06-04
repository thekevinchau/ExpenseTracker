interface ExpenseProps{
    ExpenseObj: {
        name: string,
        category: string,
        cost: number,
        recvOrSend: boolean, //true = receiving, false = sending
    },
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ExpenseForms({handleInput, ExpenseObj}: ExpenseProps):JSX.Element {
    return <div className="border flex flex-col">
        <form>
            <label>Name of Expense</label>
            <input name="name" value={ExpenseObj.name}onChange={handleInput}></input>

            <label>Category</label>
            <input name="category" value={ExpenseObj.category}onChange={handleInput}></input>

            <label>Price</label>
            <input name="cost" type="number" value={ExpenseObj.cost} onChange={handleInput}></input>
        </form>

    </div>
}