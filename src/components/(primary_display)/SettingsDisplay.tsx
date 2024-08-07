import { SettingsButtons } from "../(forms)/SettingsButtons";
import { useState } from "react";
import { CategoryForms } from "../(forms)/CategoryForms";
import { CategoryProps } from "../../App";

export interface settingsProps {
  setPageState: (page: string) => void,
}

const Settings = ({
  categories,
  addToCategoryArray,
  handleCategoryInput,
  categoryName,
  deleteCategory
}: CategoryProps) => {
  const [pageState, setPageState] = useState<string>("settings");
  return (
    <div className="border w-5/12 h-1/3 text-sm shadow-md text-sky-900">
      <div className="ml-5 mr-5 mt-3 text-left">
        {pageState === "category" && (
          <CategoryForms
            setPageState={setPageState}
            categories={categories}
            addToCategoryArray={addToCategoryArray}
            handleCategoryInput={handleCategoryInput}
            categoryName={categoryName}
            deleteCategory={deleteCategory}
          ></CategoryForms>
        )}
        {pageState === "settings" && (
          <SettingsButtons setPageState={setPageState}></SettingsButtons>
        )}
      </div>
    </div>
  );
};

export default Settings;
