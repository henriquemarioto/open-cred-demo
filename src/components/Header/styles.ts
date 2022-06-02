import styled from "styled-components";

interface Props {
  iconColor?: string;
}

export const Container = styled.header`
  padding: 5px;
  width: 15%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .main-selected {
    font-weight: bold;
    background-color: var(--white);
    box-shadow: var(--box-shadow);

    span {
      color: var(--gray-700);
    }
  }

  .sub-selected {
    font-weight: bold;

    span {
      color: var(--gray-700);
    }
  }
`;

export const Img = styled.img`
  width: 75%;
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

  gap: 10px;
`;

export const MainSection = styled(Section)``;

export const SubSection = styled(Section)`
  padding-left: 15px;

  color: var(--gray-500);

  .top {
    padding: 0;
    padding-top: 10px;
  }

  @media (min-width: 1920px) {
    padding-left: 20px;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  //gap: 10px;
  font-size: 10px;

  @media (min-width: 1920px) {
    font-size: 12px;
  }
`;

export const AccountSection = styled(Section)`
  padding-top: 50px;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: left;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  
  width: 100%;
  border-radius: 15px;

  span {
    color: var(--gray-500);
  }
`;

export const MainItem = styled(Item)`
  padding: 10px;
  width: 100%;
  font-size: 12px;

  @media (min-width: 1920px) {
    padding: 20px;
    font-size: 16px;
  }
`;

export const SubItem = styled(Item)`
  padding: 10px 0;
`;

export const ContainerSectionDetails = styled.div`
  display: flex;
  margin-left: 10px;
  border-left: 1px solid var(--gray);

  @media (min-width: 1920px) {
    margin-left: 15px;
  }
`;

export const DivIcon = styled.div<Props>`
  min-width: 30px;
  min-height: 30px;
  background-color: ${(p) =>
    p.iconColor === "white" ? "var(--green)" : "var(--white)"};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(p) =>
      p.iconColor === "white" ? "var(--white)" : "var(--green)"};
    width: 18px;
    height: 18px;
  }
`;
