import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Container, GraphContainer, Percent } from "./style";
import HorizontalDivision from "../../HorizontalDivision";
import { useState } from "react";
import getRandomNumber from "../../../utils/getRandomNumber";

const PieGraph = () => {
  interface IData {
    id: number;
    limit: number;
    used: number;
    percent: number;
    remaining: number;
  }

  const alterGraphData = (): IData => {
    const limit = 1500000
    const used = getRandomNumber(0, 1500000)
    const remaining = limit - used

    return {
      id: 1,
      limit,
      used,
      remaining,
      percent: Number(((used * 100) / limit).toFixed(2)),
    };
  };

  const [userData, setUserData] = useState<IData>(alterGraphData());

  return (
    <Container onClick={() => setUserData(alterGraphData())}>
      <GraphContainer>
        <Percent>{userData.percent}%</Percent>
        <Pie
          data={{
            datasets: [
              {
                label: "Users Gained",
                data: [userData.remaining, userData.used],
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
