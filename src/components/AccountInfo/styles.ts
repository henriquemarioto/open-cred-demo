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