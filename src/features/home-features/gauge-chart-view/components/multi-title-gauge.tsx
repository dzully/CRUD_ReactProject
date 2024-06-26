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
    offsetCenter: string[];
  };
}

export const MultiTitleGauge = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [gaugeData, setGaugeData] = useState<GaugeDataItem[]>([
    {
      value: 20,
      name: "Good",
      title: {
        offsetCenter: ["-40%", "80%"],
      },
      detail: {
        offsetCenter: ["-40%", "95%"],
      },
    },
    {
      value: 40,
      name: "Better",
      title: {
        offsetCenter: ["0%", "80%"],
      },
      detail: {
        offsetCenter: ["0%", "95%"],
      },
    },
    {
      value: 60,
      name: "Perfect",
      title: {
        offsetCenter: ["40%", "80%"],
      },
      detail: {
        offsetCenter: ["40%", "95%"],
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
          anchor: {
            show: true,
            showAbove: true,
            size: 10,
            itemStyle: {
              color: "#FAC858",
            },
          },
          pointer: {
            icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
            width: 8,
            length: "80%",
            offsetCenter: [0, "8%"],
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true,
          },
          axisLine: {
            roundCap: true,
          },
          data: gaugeData,
          title: {
            fontSize: 12,
          },
          detail: {
            width: 40,
            height: 14,
            fontSize: 12,
            color: "#fff",
            backgroundColor: "inherit",
            borderRadius: 3,
            formatter: "{value}%",
          },
          radius: "100%", // Adjust this value to fit the chart within the container
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
