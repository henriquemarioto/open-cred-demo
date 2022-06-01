import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 130px;
  height: auto;

  h2 {
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;
  }

  >span {
    font-size: 16px;
    font-weight: bold;
    color: var(--gray-500);
  }
`;

export const GraphContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Percent = styled.span`
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  left: 35px;
  top: 40px;

  background-color: rgba(255, 255, 255, 0.5);
`;