import styled from "styled-components";

interface Props {
  iconColor?: string;
}

export const Container = styled.header`
  padding: 5px;
  width: 20%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .main-selected {
    font-weight: bold;
    color: var(--gray-700);
    background-color: var(--white);
    box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px #00000005;
  }

  .sub-selected {
    color: var(--gray-700);
    font-weight: bold;
  }
`;

export const Img = styled.img`
  width: 170px;
`;

export const DivisionHorizontal = styled.div`
  background: linear-gradient(to right, transparent, var(--gray), transparent);
  height: 1px;
`;

export const DivisionVertical = styled.div`
  background-color: var(--gray);
  height: 20px;
  width: 1px;
`;

export const ContainerPath = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const CloseIcon = styled.button`
  width: 20px;
  height: 20px;

  display: block;
  margin-left: auto;

  svg {
    color: var(--gray);

    width: 100%;
    height: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export const MainSection = styled(Section)``;

export const SubSection = styled(Section)`
  padding-left: 20px;

  color: var(--gray-500);

  .top{
    padding: 0;
    padding-top: 10px;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  //gap: 10px;
  font-size: 12px;
`;

export const Item = styled.li`
  color: var(--gray-500);
  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 15px;
`;

export const MainItem = styled(Item)`
  padding: 20px;
  width: 100%;
`;

export const SubItem = styled(Item)`
  padding: 10px 0;
`

export const ContainerSectionDetails = styled.div`
  display: flex;
  margin-left: 15px;
  border-left: 1px solid var(--gray);
`

export const DivIcon = styled.div<Props>`
  width: 30px;
  height: 30px;
  background-color: ${(p) =>
    p.iconColor === "white" ? "var(--green)" : "var(--white)"};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(p) =>
      p.iconColor === "white" ? "var(--white)" : "var(--green)"};
    width: 100%;
  }
`;
