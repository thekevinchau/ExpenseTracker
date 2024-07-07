import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { PieChart } from "./PieChart";
import { BarComponent } from "./BarChart";
import { LineChart } from "./LineChart";
import { Expense } from "../(primary_display)/Display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

interface ChartDisplayProps {
  expenses: Expense[];
}

export const ChartDisplay = ({ expenses }: ChartDisplayProps) => {
  const [selectedChart, setSelectedChart] = useState<string>("");
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedChart(value);
  };
  return (
    <div className="mt-5 ml-5 mr-5 h-full mb-5 flex flex-col justify-stretch items-center">
      <div className="w-3/4">
        <Select variant={"filled"} placeholder="None selected" className="text-center" value={selectedChart} onChange={handleSelection}>
          <option>Pie Chart</option>
          <option>Bar Chart</option>
          <option>Line Chart</option>
        </Select>
      </div>
      {selectedChart === "" && (
        <div className="text-3xl h-1/2 flex flex-col justify-center items-center mt-10">
          <FontAwesomeIcon icon={faChartColumn} className="text-9xl" />
          <p className="mt-5">Select a graph above!</p>
        </div>
      )}
      {selectedChart === "Pie Chart" && <PieChart></PieChart>}
      {selectedChart === "Bar Chart" && (
        <BarComponent expenses={expenses}></BarComponent>
      )}
      {selectedChart === "Line Chart" && <LineChart></LineChart>}
    </div>
  );
};
