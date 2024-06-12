import { faGear, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ExpenseHeader = () => {
    return <div className="flex justify-between font-bold bg-slate-300 bg-opacity-20 ml-5 mr-5 mt-3 p-5 shadow-md">
    <p>Expense Tracker</p>

    <div className="w-16 flex justify-around">
      <button>
        <FontAwesomeIcon icon={faGear} size="xl" />
      </button>
      <button>
        <FontAwesomeIcon icon={faRightToBracket} size="xl" />
      </button>
    </div>
  </div>
}
export default ExpenseHeader;