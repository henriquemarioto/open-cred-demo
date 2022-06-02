import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Container, ContainerGraph, Title } from "./style";
import { useState } from "react";
import getGraphData from "../../../utils/getGraphData";

const BarBankGraph = () => {
  const valuesArray: number[] = getGraphData(200000, 1500000, 6);

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

  const alterGraphData = () => {
    return valuesArray.map((item, i) => {
      return {
        id: i + 1,
        date: date[i],
        gain: item,
      };
    });
  };

  const [userData, setUserData] = useState<IUserData[]>(alterGraphData());

  return (
    <Container onClick={() => setUserData(alterGraphData())}>
      <Title>Dados Bancários</Title>

      <ContainerGraph>
        <Bar
          data={{
            labels: userData.map((item) => item.date),
            datasets: [
              {
                label: "Dinheiro",
                data: userData.map((item) => item.gain),
                backgroundColor: ["#2D3748"],
                borderRadius: 5,
                barPercentage: 0.6,
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
            indexAxis: "y",
          }}
        />
      </ContainerGraph>
    </Container>
  );
};

export default BarBankGraph;
