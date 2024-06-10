import { Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack } from "@chakra-ui/react";

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
    return <div className="h-full ml-10 mr-10 mt-5">
        <h1 className="font-bold mb-3">Add a Transaction</h1>
        <Stack spacing={5}>
            <Input className="text-center" placeholder='Transaction Title' size='md' variant="filled" name="name" value={ExpenseObj.name} onChange={handleInput} />

            <NumberInput _placeholder={"Amount"} min={0.00} clampValueOnBlur={true} variant="filled">
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
        </Stack>

            <label>Category</label>
            <input name="category" value={ExpenseObj.category}onChange={handleInput}></input>

    </div>
}