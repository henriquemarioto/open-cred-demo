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

export const HeaderMain = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--green);
  background-image: url("./src/assets/imgs/profile-background.png");
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

export const ContainerContent = styled.div`
  margin: 0 20px;
  position: relative;
`;

export const ContainerAbsolute = styled.div`
  position: absolute;
  width: 100%;
  top: -75px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const AccountInfo = styled.div`
  padding: 20px;
  height: 150px;
  border: 2px solid var(--white);
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  /* background: linear-gradient(
    to bottom,
    var(--gray),
    var(--white),
    var(--white)
  ); */
  background-color: rgba(250, 250, 250, 0.84);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  box-shadow: var(--box-shadow);
`;

export const AccountInfoContainer = styled.div<AccountInfoContainerProps>`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || "row"};
  gap: ${(p) => (p.flexDirection === "column" ? 0 : 20)}px;
  height: 100%;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    width: 64px;
    height: 64px;

    img {
      width: 100%;
      height: 100%;
    }

    > button {
      width: 25px;
      height: 25px;
      padding: 7px;

      background-color: var(--white);
      border-radius: 5px;

      bottom: 0;
      right: 0;

      position: absolute;

      svg {
        width: 100%;
        height: 100%;
        color: var(--green);
      }
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;

  > span {
    font-size: 14px;
    color: var(--gray-500);
  }
`;

export const ButtonSolicitar = styled.button`
  padding: 10px 20px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 40px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);

  > div {
    width: 20px;
    height: 20px;
    background-color: var(--gray);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--white);
      width: 80%;
    }
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`;

export const DivClientTime = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  padding: 30px 0;
  margin-left: auto;

  > div {
    width: 20px;
    height: 20px;
    border: 2px solid var(--gray-500);
    border-radius: 50%;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const DivClientActions = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  gap: 10px;
`;

export const ButtonClientBottom = styled.button<Props>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  padding: 10px 20px;
  background-color: ${(p) => p.backgroundColor || "transparent"};
  box-shadow: ${(p) => (p.backgroundColor ? "var(--box-shadow)" : "none")};
  border-radius: 10px;
`;

export const ContentSection = styled.section`
  display: flex;
  gap: 25px;
`;

export const ContainerContentItem = styled.div<Props>`
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

export const ContainerContentItemGraph = styled(ContainerContentItem)`
  padding: 0;
  height: 325px;
  border-radius: 15px;
  background: linear-gradient(
    to right,
    transparent,
    var(--green),
    var(--green)
  );

  flex-direction: row;
`;

export const ContainerGraph = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 15px 0 15px 15px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const GreenRightBorder = styled.div`
  color: var(--white);
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25px;
  height: 100%;
  border-radius: 0 15px 15px 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 10px;
  }
`;

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

export const VerticalDivision = styled.div`
  height: 100%;
  width: 1px;
  background: linear-gradient(to top, transparent, var(--gray), transparent);
`;

export const StatusName = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
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
