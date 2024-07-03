

interface CategoryProps{
    name: string
}



export const Category = ({name}: CategoryProps) => {
    return <div>

        {name}
    </div>
}