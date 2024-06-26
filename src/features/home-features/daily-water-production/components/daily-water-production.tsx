import WaterIcon from "../../../../shared/assets/water-drop.png";
import ListWaterProductionJson from "../lib/helpers/list-water-production.json";

export const DailyWaterProduction = () => {
  return (
    <div className="absolute top-0 right-0 bottom-0 z-50">
      <div className="flex flex-col m-2 rounded-lg h-[580px] w-[250px] p-1">
        <div className="mb-2 bg-[#00000080] w-full h-fit rounded-lg p-2">
          <span className="text-white text-center flex justify-center">
            {ListWaterProductionJson.title}
          </span>
        </div>

        <ul className="w-full h-full rounded-lg flex flex-col gap-2">
          {ListWaterProductionJson.data.map((waterProduction) => (
            <li
              key={waterProduction.wtp}
              className="flex gap-2 items-center w-full min-h-20 justify-between rounded-md bg-[#22202080] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm"
            >
              <div>
                <img src={WaterIcon} alt="water-icon" className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-right">
                  WTP: {waterProduction.wtp}
                </span>
                <span className="text-white text-right">
                  {waterProduction.production} {waterProduction.unit}
                </span>
                <span className="text-white text-right">
                  {waterProduction.day}, {waterProduction.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
