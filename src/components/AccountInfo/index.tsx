import { AiFillTool } from "react-icons/ai";
import { FaPen, FaPlus } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { IconButton } from "../HeaderMain/style";
import photo from "../../assets/imgs/photo.png";
import {
  AccountInfoContainer,
  ButtonClientBottom,
  ButtonSolicitar,
  Container,
  ContainerInfo,
  ContainerPhoto,
  DivClientActions,
  DivClientTime,
  Title
} from "./styles";

const AccountInfo = () => {
  return (
    <Container>
      <AccountInfoContainer>
        <ContainerPhoto>
          <div>
            <img src={photo} />
            <IconButton>
              <FaPen />
            </IconButton>
          </div>
        </ContainerPhoto>

        <ContainerInfo>
          <Title>PRODUTOR RURAL</Title>
          <span>gabriel@agromais.com.br</span>
          <span>CPF: 12.345.678-9</span>
        </ContainerInfo>

        <ContainerInfo>
          <ButtonSolicitar>
            <div>
              <FaPlus />
            </div>
            Solicitar crédito
          </ButtonSolicitar>
        </ContainerInfo>
      </AccountInfoContainer>

      <AccountInfoContainer flexDirection="column">
        <DivClientTime>
          <div></div>
          <span>Client desde</span>
          <span>24/07/2018</span>
        </DivClientTime>

        <DivClientActions>
          <ButtonClientBottom backgroundColor="white">
            <IoIosCube />
            Análise
          </ButtonClientBottom>

          <ButtonClientBottom>
            <VscGraphLine />
            Balanço
          </ButtonClientBottom>

          <ButtonClientBottom>
            <AiFillTool />
            Configurações
          </ButtonClientBottom>
        </DivClientActions>
      </AccountInfoContainer>
    </Container>
  );
};

export default AccountInfo;
