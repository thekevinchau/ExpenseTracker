import {
  faLanguage,
  faCircleHalfStroke,
  faCoins,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { settingsProps } from "../(primary_display)/SettingsDisplay";

export const SettingsButtons = ({ setPageState }: settingsProps) => {
  return (
    <>
      <h1 className=" text-lg font-bold">Settings</h1>
      <p className="mt-3">Customize your Expense Tracker Here!</p>
      <div className="grid grid-cols-3 auto-rows-[6rem] gap-3 mt-3">
        <button className="bg-slate-100">
          <FontAwesomeIcon icon={faLanguage} size="2xl" />
          <p className="pt-1 font-bold">English</p>
        </button>
        <button className="bg-slate-100">
          <FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" />
          <p className="pt-1 font-bold">Light Mode</p>
        </button>
        <button className="bg-slate-100">
          <FontAwesomeIcon icon={faCoins} size="2xl" />
          <p className="pt-1 font-bold">USD</p>
        </button>
        <button
          className="bg-slate-100"
          onClick={() => setPageState("category")}
        >
          <FontAwesomeIcon icon={faList} size="2xl" />
          <p className="pt-1 font-bold">Category</p>
        </button>
      </div>
    </>
  );
};
