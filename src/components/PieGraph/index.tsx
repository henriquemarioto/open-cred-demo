import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Container, GraphContainer, Percent } from "./style";
import HorizontalDivision from "../HorizontalDivision";

const PieGraph = () => {
  const userData = [
    {
      id: 1,
      year: 2016,
      userGain: 100,
      userLost: 823,
    },
    {
      id: 2,
      year: 2016,
      userGain: 20,
      userLost: 345,
    },
  ];

  return (
    <Container>
      <GraphContainer>
        <Percent>80.2%</Percent>
        <Pie
          data={{
            datasets: [
              {
                label: "Users Gained",
                data: userData.map((data) => data.userGain),
                backgroundColor: ["#1FAB89", "#ecf0f1"],
                borderColor: "transparent",
                borderWidth: 2,
              },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </GraphContainer>
      <h2>Crédito</h2>
      <span>Risco: $ 1.2 M</span>
      <HorizontalDivision />
      <span>Limite: R$ 1.5 M</span>
    </Container>
  );
};

export default PieGraph;
