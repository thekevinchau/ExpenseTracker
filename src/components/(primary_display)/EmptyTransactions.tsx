import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EmptyTransaction = () => {
  return (
    <div className="text-3xl h-1/2 flex flex-col justify-center items-center">
      <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" />
      <p className="mt-5">Add your first transaction!</p>
    </div>
  );
};
