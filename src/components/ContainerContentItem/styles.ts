import styled from "styled-components";

interface Props {
  flex?: string;
}

export const Container = styled.div<Props>`
  background-color: var(--white);
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  box-shadow: var(--box-shadow);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: ${(p) => p.flex || 1};
`;