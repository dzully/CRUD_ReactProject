import { GaugeChart } from "echarts/charts";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef, useState } from "react";

echarts.use([GaugeChart, CanvasRenderer]);

interface GaugeDataItem {
  value: number;
  name: string;
  title: {
    offsetCenter: string[];
  };
  detail: {
    valueAnimation: boolean;
    offsetCenter: string[];
  };
}

export const RingChartView = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [gaugeData, setGaugeData] = useState<GaugeDataItem[]>([
    {
      value: 20,
      name: "Perfect",
      title: {
        offsetCenter: ["0%", "-30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-20%"],
      },
    },
    {
      value: 40,
      name: "Good",
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    {
      value: 60,
      name: "Commonly",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "40%"],
      },
    },
  ]);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    const option: echarts.EChartsOption = {
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: "#464646",
            },
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: gaugeData,
          title: {
            bottom: 10,
            fontSize: 5,
          },
          detail: {
            width: 19,
            height: 8,
            fontSize: 8,
            color: "inherit",
            borderColor: "inherit",
            borderRadius: 20,
            borderWidth: 1,
            formatter: "{value}%",
          },
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.setOption(option);
    }

    const timer = setInterval(() => {
      const newGaugeData = gaugeData.map((item) => ({
        ...item,
        value: +(Math.random() * 100).toFixed(2),
      }));
      setGaugeData(newGaugeData);

      if (chartInstance.current) {
        chartInstance.current.setOption({
          series: [
            {
              data: newGaugeData,
              pointer: {
                show: false,
              },
            },
          ],
        });
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      chartInstance.current?.dispose();
    };
  }, [gaugeData]);

  return <div ref={chartRef} style={{ width: "100%", height: "200px" }} />;
};
