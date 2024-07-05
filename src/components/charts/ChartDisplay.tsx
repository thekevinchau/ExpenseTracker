import { Select } from "@chakra-ui/react";
import { useState } from "react";

export const ChartDisplay = () => {
    const [selectedChart, setSelectedChart] = useState<string>("");
    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        setSelectedChart(value);
    }
  return (
    <div className="mt-5 border ml-5 mr-5">
        <Select
          variant={"filled"}
          placeholder="Select a Chart"
          className="text-center"
          value={selectedChart}
          onChange={handleSelection}
        >
          <option>Pie Chart</option>
          <option>Bar Chart</option>
          <option>Line Chart</option>
        </Select>

        {selectedChart === "Pie Chart" && <div>Pie Chart</div>}
    </div>
  );
};
