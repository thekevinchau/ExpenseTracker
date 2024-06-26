import { CategoryProps } from "./CategoryForms"

interface CategoryProps2{
    setCategoryName: () => void;
}



export const Category = ({name}: CategoryProps, {setCategoryName}: CategoryProps2) => {
    return <div>

        {name}
    </div>
}