import { BumpChart } from "./bump-chart";

export const ReservedMargin = () => {
  return (
    <div className="absolute top-[235px] right-0 bottom-0">
      <div className="flex flex-col m-2 rounded-lg h-[580px] w-[250px] p-1">
        <div className="mb-2 bg-[#00000080] w-full h-fit rounded-lg p-2">
          <span className="text-white text-center flex justify-center">
            Reserved Margin by WTP
          </span>
        </div>

        <div className="mb-2 bg-[#00000080] w-full h-fit rounded-lg p-2">
          <BumpChart />
        </div>
      </div>
    </div>
  );
};
