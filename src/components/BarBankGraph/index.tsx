import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Container } from "./style";
import { useState } from "react";
import alterGraphData from "../../utils/getGraphData";

const BarBankGraph = () => {
  const valuesArray: number[] = alterGraphData(200000, 1500000, 6);

  interface IUserData {
    id: number;
    date: string;
    gain: number;
  }

  const date = [
    "06/2022",
    "08/2022",
    "09/2022",
    "12/2022",
    "04/2023",
    "05/2023",
  ];

  const [userData, setUserData] = useState<IUserData[]>(
    valuesArray.map((item, i) => {
      return {
        id: i + 1,
        date: date[i],
        gain: item,
      };
    })
  );

  return (
    <Container>
      <Bar
        data={{
          labels: userData.map((item) => item.date),
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
          indexAxis: 'y',
        }}
      />
    </Container>
  );
};

export default BarBankGraph;
