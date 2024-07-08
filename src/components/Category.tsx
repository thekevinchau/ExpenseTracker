import { Button } from "@chakra-ui/react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryProps {
  name: string;
  deleteCategory: (name: string) => void;
}

export const Category = ({ name, deleteCategory }: CategoryProps) => {
  return (
    <div className="mt-[0.1rem] h-8 flex items-center justify-between shadow-sm">
      <div className="h-full w-8 flex items-center">
        <FontAwesomeIcon icon={faTag} size="lg" />
        <p className="ml-2">{name}</p>
      </div>
      <Button
        onClick={() => deleteCategory(name)}
        colorScheme="red"
        variant={"link"}
      >
        Remove
      </Button>
    </div>
  );
};
