import { GaugeChart } from "echarts/charts";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef } from "react";

echarts.use([GaugeChart, CanvasRenderer]);

export const GaugeChartView = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    const option = {
      series: [
        {
          type: "gauge",
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.3, "#67e0e3"],
                [0.7, "#37a2da"],
                [1, "#fd666d"],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "inherit",
            distance: 25,
            fontSize: 10,
          },
          detail: {
            valueAnimation: true,
            formatter: "{value} km/h",
            color: "inherit",
            fontSize: 8,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.setOption(option);
    }

    const timer = setInterval(() => {
      if (chartInstance.current) {
        chartInstance.current.setOption({
          series: [
            {
              data: [
                {
                  value: +(Math.random() * 100).toFixed(2),
                },
              ],
            },
          ],
        });
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      chartInstance.current?.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "200px" }} />;
};
