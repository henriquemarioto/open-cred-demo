import { Chart } from "react-chartjs-2";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";
import { Container, ContainerGraph, ContainerNumber, Title } from "./style";
import getGraphData from "../../../utils/getGraphData";
import { useEffect, useRef, useState } from "react";

const BarPerformanceGraph = () => {
  interface IUserData {
    id: number;
    year: number;
    gain: number;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

  const chartRef = useRef<ChartJS>(null);

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(1, "#1FAB89");
    gradient.addColorStop(0.5, "#1FAB8950");
    gradient.addColorStop(0, "#1FAB8900");

    return gradient;
  }

  const alterGraphData = () => {
    return getGraphData(200000, 1500000, 9).map((item, i) => {
      return {
        id: i + 1,
        year: 2014 + i,
        gain: item,
      };
    });
  };

  const [userData, setUserData] = useState<IUserData[]>(alterGraphData());
  const [chartData, setChartData] = useState<ChartData<any>>({
    datasets: []
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const data: ChartData<'bar' | 'line'> = {
      labels: userData.map((item) => item.year),
      datasets: [
        {
          label: "Dinheiro",
          data: userData.map((item) => item.gain),
          borderColor: "#1FAB89",
          backgroundColor: createGradient(
            chartRef.current.ctx,
            chart.chartArea
          ),
          fill: "start",
          tension: 0.3,
        },
        {
          type: "bar",
          label: "Dinheiro",
          data: userData.map((item) => item.gain),
          backgroundColor: ["#2D3748"],
          borderRadius: 5,
          barPercentage: 0.3
        },
      ],
    };

    setChartData(data);
  }, [userData]);

  return (
    <Container onClick={() => setUserData(alterGraphData())}>
      <Title>Histórico de Performance</Title>

      <ContainerGraph>
        <Chart
          ref={chartRef}
          type={"line"}
          data={chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
        <ContainerNumber>
          <p>100%</p>
          <p>90%</p>
          <p>75%</p>
          <p>60%</p>
          <p>45%</p>
          <p>30%</p>
          <p>15%</p>
          <p>0%</p>
        </ContainerNumber>
      </ContainerGraph>
    </Container>
  );
};

export default BarPerformanceGraph;
