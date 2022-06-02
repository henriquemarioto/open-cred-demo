import styled from "styled-components";
import { Container as ContainerContentItem } from "../ContainerContentItem/styles";

export const Container = styled(ContainerContentItem)`
  padding: 0;
  height: 325px;
  border-radius: 15px;
  background: linear-gradient(
    to right,
    transparent,
    var(--green),
    var(--green)
  );

  flex-direction: row;
`;

export const ContainerGraph = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 15px 0 15px 15px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const GreenRightBorder = styled.div`
  color: var(--white);
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25px;
  height: 100%;
  border-radius: 0 15px 15px 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 10px;
  }
`;
