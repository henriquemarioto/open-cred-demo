import styled from "styled-components";

interface Props {
  backgroundColor?: string;
}

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardStatusNumber = styled.p<Props>`
  width: 80px;
  font-size: 16px;
  padding: 20px 0;
  text-align: center;
  color: var(--white);
  background-color: ${(p) => p.backgroundColor || "transparent"};
  font-weight: bold;
  border-radius: 12px;

  @media (min-width: 1920px) {
    width: 120px;
    font-size: 20px;
    padding: 20px 15px;
  }
`;

export const StatusName = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  flex: 1;

  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;