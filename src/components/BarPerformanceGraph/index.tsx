import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Container, ContainerNumber } from "./style";
import { useState } from "react";
import alterGraphData from "../../utils/alterGraphData";

const BarPerformanceGraph = () => {
  const valuesArray: number[] = alterGraphData(200000, 1500000, 9);

  interface IUserData {
    id: number;
    year: number;
    gain: number;
  }

  const [userData, setUserData] = useState<IUserData[]>(
    valuesArray.map((item, i) => {
      return {
        id: i + 1,
        year: 2014 + i,
        gain: item,
      };
    })
  );

  return (
    <Container>
      <Bar
        data={{
          labels: userData.map((item) => item.year),
          datasets: [
            {
              label: "Dinheiro",
              data: userData.map((item) => item.gain),
              backgroundColor: ["#2D3748"],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
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
    </Container>
  );
};

export default BarPerformanceGraph;
