import styled from "styled-components";

interface Props {
  bold?: boolean;
  fontSize?: string;
  backgroundColor?: string;
  flex?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--green);
  background-image: url("/src/assets/imgs/profile-background.png");
  background-size: 100% 300px;
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Span = styled.span<Props>`
  font-size: ${(p) => p.fontSize || 12}px;
  color: var(--white);
  ${(p) => p.bold && "font-weight: bold;"}
`;

export const IconButton = styled.button<Props>`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--white);
  cursor: pointer;

  ${(p) => p.bold && "font-weight: bold;"}
`;

export const InputContainer = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px #00000005;
  padding: 10px;
  width: 200px;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: auto;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  padding: 0;
  border: 0;
  margin: 0;
  padding: 5px;
  width: 100%;
`;