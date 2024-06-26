import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export const BumpChart = () => {
  const [option, setOption] = useState({});

  const names = [
    "Orange",
    "Tomato",
    "Apple",
    "Sakana",
    "Banana",
    "Iwashi",
    "Snappy Fish",
    "Lemon",
    "Pasta",
  ];
  const years = ["2001", "2002", "2003", "2004", "2005", "2006"];

  const shuffle = (array: unknown[]) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const generateRankingData = () => {
    const map = new Map();
    const defaultRanking = Array.from(
      { length: names.length },
      (_, i) => i + 1
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of years) {
      const shuffleArray = shuffle([...defaultRanking]);
      names.forEach((name, i) => {
        map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
      });
    }
    return map;
  };

  const generateSeriesList = () => {
    const seriesList: {
      name: unknown;
      symbolSize: number;
      type: string;
      smooth: boolean;
      emphasis: { focus: string };
      endLabel: { show: boolean; formatter: string; distance: number };
      lineStyle: { width: number };
      data: unknown;
    }[] = [];
    const rankingMap = generateRankingData();
    rankingMap.forEach((data, name) => {
      const series = {
        name,
        symbolSize: 20,
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        endLabel: {
          show: true,
          formatter: "{a}",
          distance: 20,
        },
        lineStyle: {
          width: 4,
        },
        data,
      };
      seriesList.push(series);
    });
    return seriesList;
  };

  useEffect(() => {
    const chartOption = {
      title: {
        text: "",
      },
      tooltip: {
        trigger: "item",
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 10,
        containLabel: false,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: true,
        },
        axisLabel: {
          margin: 30,
          fontSize: 16,
        },
        boundaryGap: false,
        data: years,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          margin: 30,
          fontSize: 16,
          formatter: "#{value}",
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: names.length,
      },
      series: generateSeriesList(),
    };

    setOption(chartOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ReactECharts option={option} style={{ height: "270px" }} />;
};
