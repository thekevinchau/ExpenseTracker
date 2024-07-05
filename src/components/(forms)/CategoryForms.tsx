import { ButtonGroup, Input } from "@chakra-ui/react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "../Category";

interface CategoryFormsProps {
  setPageState: (page: string) => void;
  addToCategoryArray: () => void;
  handleCategoryInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  categoryName: string;
}

export const CategoryForms = ({
  setPageState,
  addToCategoryArray,
  handleCategoryInput,
  categoryName,
  categories,
}: CategoryFormsProps) => {
  return (
    <div className="w-full text-sm text-sky-900 overflow-scroll">
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
            defaultValue=""
            value={categoryName}
            onChange={handleCategoryInput}
          ></Input>
          <button
            onClick={addToCategoryArray}
            disabled={categoryName === ""}
            className="transition rounded-md ease-in-out delay-150 border text-sky-500 border-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:border-none duration-300 w-64"
          >
            Add
          </button>
        </ButtonGroup>
        <div className="overflow-scroll h-44">
          {categories.map((category: string) => (
            <Category name={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};
