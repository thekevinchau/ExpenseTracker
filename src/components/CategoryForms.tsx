import { Alert, AlertIcon, Button, ButtonGroup, Input } from "@chakra-ui/react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface CategoryFormsProps {
  setPageState: (page: string) => void;
}

let isAlertShown: boolean;

export function AlertBox(): JSX.Element {
  return (
    <Alert status="warning" className="mt-1">
      <AlertIcon />
      WARNING: You need to input a value!
    </Alert>
  );
}

export const CategoryForms = ({ setPageState }: CategoryFormsProps) => {
  const [categoryArray, setCategoryArray] = useState<{ name: string }[]>([]);
  const [categoryObj, setCategoryObj] = useState({ name: "" });
  const handleCategoryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCategoryObj({ name: value });
  };

  const addToCategoryArray = () => {
    categoryObj.name === "" ? (isAlertShown = true) : (isAlertShown = false);
    const resetCategoryObject = { name: "" };
    setCategoryArray([...categoryArray, categoryObj]);
    setCategoryObj(resetCategoryObject);
    console.log(categoryArray);
  };

  return (
    <div className="w-full text-sm text-sky-900 h-full">
      <div className="flex justify-between">
        <h1 className=" text-lg font-bold">Categories</h1>
        <button onClick={() => setPageState("settings")}>
          <FontAwesomeIcon icon={faX} size="lg" />
        </button>
      </div>
      <p className="mt-3">
        Manage the contents of your expenses and incomes here.
      </p>

      <div className="mt-5">
        <ButtonGroup variant="outline" spacing="1">
          <Input
            className="text-center font-bold"
            placeholder="Category"
            variant="filled"
            onChange={handleCategoryInput}
          ></Input>
          <button
            onClick={() => addToCategoryArray()}
            disabled={isAlertShown === true}
            className="transition rounded-md ease-in-out delay-150 border text-sky-500 border-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:border-none duration-300 w-64"
          >
            Add
          </button>
        </ButtonGroup>
        {isAlertShown === true && <AlertBox></AlertBox>}
      </div>
    </div>
  );
};
