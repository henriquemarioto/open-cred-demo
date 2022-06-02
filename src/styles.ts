import styled from "styled-components";

interface Props {
  bold?: boolean;
  fontSize?: string;
  backgroundColor?: string;
  flex?: string;
}

interface AccountInfoContainerProps {
  flexDirection?: string;
}

export const Container = styled.div`
  padding: 25px 30px;

  display: flex;
  gap: 30px;
`;

export const Main = styled.main`
  width: 100%;
`;

export const ContainerContent = styled.div`
  margin: 0 20px;
  position: relative;
`;

export const ContainerAbsolute = styled.div`
  position: relative;
  width: 100%;
  top: -75px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ContentSection = styled.section`
  display: flex;
  gap: 25px;
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SerasaCard = styled.div<Props>`
  width: 100%;
  height: 60px;
  padding: 5px;
  border-radius: 7px;
  background-color: ${(p) => p.backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
  }
`;

export const SerasaInfo = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  > h2 {
    font-weight: bold;
    font-size: 12px;
  }

  > span {
    font-size: 6px;
    color: var(--gray);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 5px;
    > svg {
      color: ${(p) => p.backgroundColor};
      width: 18px;
      height: 18px;
    }

    > button {
      font-size: 8px;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const RestritivosTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const UpdateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    color: var(--gray);

    > svg {
      width: 20px;
      height: 20px;
    }

    > span {
      color: var(--gray);
      font-weight: bold;
      font-size: 8px;
    }
  }
`;

export const Calendar = styled.section`
  width: 70%;
  background-color: var(--green);
  border-radius: 15px;
  padding: 5px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    > svg {
      height: 20px;
      width: 20px;
      color: var(--white);
    }
  }
`;

export const CalendarButtons = styled.button`
  background-color: var(--green);
  padding: 7px 20px;
  border-radius: 20px;
  border: 2px solid var(--white);
  color: var(--white);
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 40px;
  padding: 10px 0;

  span {
    color: var(--gray);
  }

  span:nth-child(2){
    margin-left: auto;
  }
`;
