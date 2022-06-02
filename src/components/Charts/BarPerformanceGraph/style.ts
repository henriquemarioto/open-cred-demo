import styled from "styled-components";

export const Container = styled.div`
  gap: 15px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContainerContent = styled.div`
  display: flex;
  height: 100%;

`;

export const ContainerGraph = styled.div`
  position: relative;
  height: 94%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerNumber = styled.div`
  min-width: 40px;
  height: 100%;
  padding: 30px 0;

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