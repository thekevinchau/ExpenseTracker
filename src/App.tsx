import { useState } from "react";
import "./App.css";
import Display from "./components/(primary_display)/Display";
import Settings from "./components/(primary_display)/SettingsDisplay";

export interface CategoryProps {
  addToCategoryArray: () => void;
  handleCategoryInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  categoryName: string,
  deleteCategory: (name: string) => void;
}

function App() {
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryArray, setCategoryArray] = useState<string[]>([
    "Dining",
    "Travel",
    "Health",
    "Shopping",
  ]);

  function changeVisibility() {
    setSettingsVisibility(!settingsVisibility);
    console.log(settingsVisibility);
  }

  function addToCategoryArray() {
    if (categoryArray.includes(categoryName)) {
      alert("Category already exists!");
    } else {
      setCategoryArray([...categoryArray, categoryName]);
    }
  }
  function handleCategoryInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setCategoryName(value);
  }

  function deleteCategory(name: string){
    const categoryToBeDeleted = categoryArray.filter((category: string) => category !== name)
    setCategoryArray(categoryToBeDeleted);
  }

  return (
    <div className="h-screen flex justify-center">
      <Display
        toggleSettings={changeVisibility}
        categories={categoryArray}
      ></Display>
      {settingsVisibility === true && (
        <Settings
          addToCategoryArray={addToCategoryArray}
          handleCategoryInput={handleCategoryInput}
          categories={categoryArray}
          categoryName={categoryName}
          deleteCategory={deleteCategory}
        ></Settings>
      )}
    </div>
  );
}

export default App;
