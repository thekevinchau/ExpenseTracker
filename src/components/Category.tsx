import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryProps {
  name: string;
  deleteCategory: (name: string) => void;
}

export const Category = ({ name, deleteCategory }: CategoryProps) => {
  return (
    <div className="mt-[0.1rem] h-8 flex items-center shadow-sm">
      <div className="h-full w-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faTag} size="lg" />
      </div>
      {name}
      <button onClick={() => deleteCategory(name)}>delete</button>
    </div>
  );
};
