import {
  faCircleHalfStroke,
  faCoins,
  faLanguage,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  return (
    <div className="w-5/12 h-1/2 text-sm shadow-md text-sky-900">
      <div className="ml-10 mr-10 mt-5 text-left">
        <h1 className=" text-lg font-bold">Settings</h1>
        <p className="mt-3">Customize your Expense Tracker Here!</p>
        <div className="grid grid-cols-3 auto-rows-[6rem] gap-3 mt-3">
          <button className="bg-slate-100">
            <FontAwesomeIcon icon={faLanguage} size="2xl"/>
            <p className="pt-1">English</p>
          </button>
          <button className="bg-slate-100">
            <FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" />
            <p className="pt-1">Light Mode</p>
          </button>
          <button className="bg-slate-100">
            <FontAwesomeIcon icon={faCoins} size="2xl" />
            <p className="pt-1">USD</p>
          </button>
          <button className="bg-slate-100">
            <FontAwesomeIcon icon={faList} size="2xl" />
            <p>Category</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
