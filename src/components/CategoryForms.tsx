import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryFormsProps {
  setPageState: (page: string) => void;
}

export const CategoryForms = ({ setPageState }: CategoryFormsProps) => {
  return (
    <div className="w-full text-sm text-sky-900 border h-full">
        <div className="flex justify-between">
        <h1 className=" text-lg font-bold">Categories</h1>
        <button onClick={() => setPageState("settings")}><FontAwesomeIcon icon={faX} size="lg" /></button>
        </div>
      <p className="mt-3">Manage the contents of your expenses and incomes here.</p>
    </div>
  );
};
