import { Button, ButtonGroup, Input, Select, Stack } from "@chakra-ui/react";

interface ExpenseProps {
  ExpenseObj: {
    name: string;
    category: string;
    cost: number;
    type: string; //true = receiving, false = sending
  };
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  addExpense: () => void;
}


export default function ExpenseForms({
  handleInput,
  ExpenseObj,
  addExpense,
  handleSelect
}: ExpenseProps): JSX.Element {

  return (
    <div className="h-full ml-10 mr-10 mt-5">
      <h1 className="font-bold mb-3">Add a Transaction</h1>
      <Stack spacing={5}>
        <Input
          className="text-center"
          placeholder="Transaction Title"
          size="md"
          variant="filled"
          name="name"
          value={ExpenseObj.name}
          onChange={handleInput}
        />


        <Select placeholder="Select Option" variant="filled" size="md" className="text-center" name="category">
          <option value="Personal Expenses">Personal Expenses</option>
          <option value="Health">Health</option>
        </Select>


        <Select placeholder="Incoming or Outgoing?" size="md" variant="filled" className="text-center" value={ExpenseObj.type} name="type" onChange={handleSelect}>
            <option value="incoming">Incoming</option>
            <option value="outgoing">Outgoing</option>
        </Select>

        <Input
          type="number"
          className="text-center"
          placeholder="Transaction Cost"
          size="md"
          variant="filled"
          name="cost"
          value={ExpenseObj.cost}
          onChange={handleInput}
        />

        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue" onClick={addExpense}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}
