import TableModel from "../TableModel";

const TableBank = () => {
  return (
    <TableModel title="Dados Bancários">
      <thead>
        <tr>
          <th></th>
          <th>Dólar</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>A vencer</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>Vencido</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>Prejuízo</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>6 - 15</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>16 - 30</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>31 - 60</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>

        <tr>
          <td>Instituições</td>
          <td>R$1.800.340,00</td>
          <td>R$1.800.340,00</td>
        </tr>
      </tbody>
    </TableModel>
  );
};

export default TableBank;
