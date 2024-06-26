import { DailyWaterProduction } from "@features/home-features/daily-water-production";
import {
  GaugeChartView,
  MultiTitleGauge,
  RingChartView,
} from "@features/home-features/gauge-chart-view";
import { ListPlantProfile } from "@features/home-features/list-plant-profile";
import { ReservedMargin } from "@features/home-features/reserved-margin";

type MapAppProps = {
  mapNode: React.ReactNode;
};

export const MapApp = ({ mapNode }: MapAppProps) => {
  return (
    <div className="relative mt-10 rounded-lg overflow-hidden">
      <div className="h-[800px] w-full">{mapNode}</div>
      <ListPlantProfile />
      <DailyWaterProduction />
      <ReservedMargin />
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="flex m-2 bg-[#00000080] rounded-lg">
          <GaugeChartView />
          <GaugeChartView />
          <MultiTitleGauge />
          <RingChartView />
          <RingChartView />
        </div>
      </div>
    </div>
  );
};
