
import { useState } from 'react';
import './App.css'
import Display from './components/Display';
import Settings from './components/SettingsDisplay';

export interface CategoryProps {
    addToCategoryArray: () => void,
    handleCategoryInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    categories: string[],
    categoryName: string
}

function App() {
    const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);
    const [categoryArray, setCategoryArray] = useState<string[]>(["Dining","Travel","Health", "Shopping"]);
    const [categoryName, setCategoryName] = useState<string>("");

    function changeVisibility () {
        setSettingsVisibility(!settingsVisibility);
        console.log(settingsVisibility);
    }

    function addToCategoryArray () {
        setCategoryArray([...categoryArray, categoryName])
    }
    function handleCategoryInput (event: React.ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setCategoryName(value);
    }

return <div className='h-screen flex justify-center'>
    <Display toggleSettings={changeVisibility} categories={categoryArray}></Display>
    {settingsVisibility === true && <Settings addToCategoryArray={addToCategoryArray} handleCategoryInput={handleCategoryInput} categories={categoryArray} categoryName={categoryName}></Settings>}
</div>
}

export default App;
