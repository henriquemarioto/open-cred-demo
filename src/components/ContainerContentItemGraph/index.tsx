import { ReactElement, ReactNode } from "react";
import { Container, ContainerGraph, GreenRightBorder } from "./styles";



interface Props {
  children?: ReactNode;
  flex?: string;
  icon: any;
  textSvg: string;
}

const ContainerContentItemGraph = ({children, flex, icon, textSvg}: Props) => {
    return (
      <Container flex={flex}>
        <ContainerGraph>{children}</ContainerGraph>
        <GreenRightBorder>
          <img src={textSvg} />
          {icon}
        </GreenRightBorder>
      </Container>
    );
}

export default ContainerContentItemGraph;