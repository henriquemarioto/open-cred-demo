import { FaBell, FaPen, FaPlus } from "react-icons/fa";
import {
  IoIosCube,
  IoIosSearch,
  IoMdPerson,
  IoMdSettings,
} from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillTool } from "react-icons/ai";
import Header from "./components/Header";
import {
  AccountInfo,
  AccountInfoContainer,
  ButtonClientBottom,
  ButtonSolicitar,
  Container,
  ContainerAbsolute,
  ContainerContent,
  ContainerInfo,
  ContainerPhoto,
  DivClientActions,
  DivClientTime,
  HeaderMain,
  IconButton,
  Input,
  InputContainer,
  Main,
  NavHeader,
  Span,
  Title,
} from "./styles";
import photo from "./assets/imgs/photo.png";

function App() {
  return (
    <Container>
      <Header />

      <Main>
        <HeaderMain>
          <NavHeader>
            <Span>Pages / Profile</Span>

            <InputContainer>
              <IoIosSearch />
              <Input placeholder="Type here..." />
            </InputContainer>

            <IconButton bold>
              <IoMdPerson size={20} />
              Rafael
            </IconButton>

            <IconButton>
              <IoMdSettings />
            </IconButton>

            <IconButton>
              <FaBell />
            </IconButton>
          </NavHeader>
          <Span bold fontSize="16">
            Profile
          </Span>
        </HeaderMain>

        <ContainerContent>
          <ContainerAbsolute>
            <AccountInfo>
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
                  <ButtonClientBottom>
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
            </AccountInfo>
          </ContainerAbsolute>
        </ContainerContent>
      </Main>
    </Container>
  );
}

export default App;
