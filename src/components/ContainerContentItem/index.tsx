import { ReactNode } from "react";
import { Container } from "./styles"

interface Props{
  children?: ReactNode
  flex?: string;
}

const ContainerContentItem = ({children, flex}: Props) => {
  return <Container flex={flex}>{children}</Container>;
};

export default ContainerContentItem