import { ReactNode } from "react";
import { Container } from "./style";

interface Props {
  title: string;
  children: ReactNode;
}

const TableModel = ({ title, children }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      <table>
        {children}
      </table>
    </Container>
  );
};

export default TableModel;
