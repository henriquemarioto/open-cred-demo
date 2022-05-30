import styled from "styled-components";

interface Props {
  bold?: boolean;
  fontSize?: string;
  backgroundColor?: string;
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
  gap: 10px;
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

export const MainSection = styled.section`
  display: flex;
  gap: 20px;
`;
