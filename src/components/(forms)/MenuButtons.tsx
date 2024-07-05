import {
  faBars,
  faChartPie,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuButtonsProps {
  setPageState: (state: string) => void;
}

export default function MenuButtons({
  setPageState,
}: MenuButtonsProps): JSX.Element {



  return (
    <div className="flex justify-between font-bold ml-5 mr-2 mt-4 text-sm bg-opacity-20">
      <div>
        <p>Current Month</p>
      </div>
      <div className="h-auto flex justify-around w-5/12 items-center">
        <button
          className="border w-7 h-7 hover:bg-green-500"
          onClick={() => setPageState("expenseForms")}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
        <button
          className="border w-7 h-7 hover:bg-blue-400"
          onClick={() => setPageState("listView")}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <button
          className="border w-7 h-7 hover:bg-orange-500"
          onClick={() => setPageState("stats")}
        >
          <FontAwesomeIcon icon={faChartPie} size="lg" />
        </button>
        <button
          className="border w-7 h-7 hover:bg-red-600"
          onClick={() => setPageState("history")}
        >
          <FontAwesomeIcon icon={faClock} size="lg" />
        </button>
      </div>
    </div>
  );
}
