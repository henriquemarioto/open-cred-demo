import VerticalDivision from "../VerticalDivision"
import { CardStatusNumber, ContainerItems, StatusName } from "./styles"

const BankData = () => {
 return (
   <>
     <ContainerItems>
       <CardStatusNumber backgroundColor="var(--yellow-100)">
         R$ 1.5 M
       </CardStatusNumber>

       <VerticalDivision />

       <StatusName>Limite</StatusName>
     </ContainerItems>

     <ContainerItems>
       <CardStatusNumber backgroundColor="var(--red)">
         R$ 1.2 M
       </CardStatusNumber>

       <VerticalDivision />

       <StatusName>Risco</StatusName>
     </ContainerItems>

     <ContainerItems>
       <CardStatusNumber backgroundColor="var(--gray-500)">
         X %
       </CardStatusNumber>

       <VerticalDivision />

       <StatusName>Liquidez</StatusName>
     </ContainerItems>
   </>
 );
}

export default BankData