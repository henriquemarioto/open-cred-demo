import styled from "styled-components";

export const Container = styled.div`
  gap: 15px;
  width: 880px;
  height: 100%;
`;

export const ContainerGraph = styled.div`
  position: relative;
  height: 95%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerNumber = styled.div`
  height: 100%;
  padding: 25px 0;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;