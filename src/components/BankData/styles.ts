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
  width: 120px;
  font-size: 20px;
  text-align: center;
  color: var(--white);
  background-color: ${(p) => p.backgroundColor || "transparent"};
  font-weight: bold;
  border-radius: 12px;
  padding: 20px 15px;
`;

export const StatusName = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;