import { FaBell, FaPen, FaPlus } from "react-icons/fa";
import {
  IoIosCube,
  IoIosLock,
  IoIosSearch,
  IoMdPerson,
  IoMdSettings,
} from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillTool, AiOutlineReload } from "react-icons/ai";
import { FiCheckCircle, FiMinusCircle, FiSlash, FiUpload } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import Header from "./components/Header";
import {
  AccountInfo,
  AccountInfoContainer,
  ButtonClientBottom,
  ButtonSolicitar,
  CardStatusNumber,
  Container,
  ContainerAbsolute,
  ContainerContent,
  ContainerContentItem,
  ContainerContentItemGraph,
  ContainerGraph,
  ContainerInfo,
  ContainerPhoto,
  ContainerItems,
  ContentSection,
  DivClientActions,
  DivClientTime,
  Footer,
  GreenRightBorder,
  HeaderMain,
  IconButton,
  Input,
  InputContainer,
  Main,
  NavHeader,
  Span,
  StatusName,
  Title,
  VerticalDivision,
  SerasaCard,
  SerasaInfo,
  RestritivosTitle,
  UpdateContainer,
  Calendar,
  CalendarButtons,
} from "./styles";
import HorizontalDivision from "./components/HorizontalDivision";
import photo from "./assets/imgs/photo.png";
import openSafe from "./assets/imgs/opensafe.svg";
import serasa from "./assets/imgs/serasaexperian.svg";
import sap from "./assets/imgs/sap.svg";
import saptext from "./assets/imgs/saptext.svg";
import PieGraph from "./components/PieGraph";

function App() {
  return (
    <>
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
              </AccountInfo>

              <ContentSection>
                {/* Limite Risco Liquidez */}
                <ContainerContentItem>
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
                </ContainerContentItem>

                <ContainerContentItem>
                  <PieGraph />
                </ContainerContentItem>

                {/* Graphic */}
                <ContainerContentItemGraph flex="2.5">
                  <ContainerGraph></ContainerGraph>
                  <GreenRightBorder>
                    <img src={openSafe} />
                    <IoIosLock />{" "}
                  </GreenRightBorder>
                </ContainerContentItemGraph>

                {/* Serasa */}
                <ContainerContentItem>
                  <ContainerItems>
                    <SerasaCard backgroundColor="var(--green)">
                      <img src={serasa} />
                    </SerasaCard>

                    <SerasaInfo backgroundColor="var(--green)">
                      <h2>Sem restritivos</h2>
                      <span>Verificado às 21:52:12 (GMT-2)</span>
                      <div>
                        <FiCheckCircle />
                      </div>
                    </SerasaInfo>
                  </ContainerItems>

                  <ContainerItems>
                    <SerasaCard backgroundColor="var(--yellow-400)">
                      <img src={serasa} />
                    </SerasaCard>

                    <SerasaInfo backgroundColor="var(--yellow-400)">
                      <h2>Impedimento Encontrado</h2>
                      <span>Verificado às 21:52:12 (GMT-2)</span>
                      <div>
                        <FiSlash />
                        <button>Clique para ver mais</button>
                      </div>
                    </SerasaInfo>
                  </ContainerItems>

                  <ContainerItems>
                    <SerasaCard backgroundColor="var(--gray)">
                      <img src={serasa} />
                    </SerasaCard>

                    <SerasaInfo backgroundColor="var(--gray)">
                      <h2>Sem informação</h2>
                      <span>Verificado às 21:52:12 (GMT-2)</span>
                      <div>
                        <FiMinusCircle />
                      </div>
                    </SerasaInfo>
                  </ContainerItems>

                  <HorizontalDivision />

                  <RestritivosTitle>Restritivos</RestritivosTitle>

                  <UpdateContainer>
                    <div>
                      <AiOutlineReload />
                      <span>Atualizar</span>
                    </div>
                  </UpdateContainer>
                </ContainerContentItem>
              </ContentSection>

              <HorizontalDivision />
              <HorizontalDivision />

              <Calendar>
                <div>
                  <CalendarButtons>Ano atual</CalendarButtons>
                  <CalendarButtons>Histórico</CalendarButtons>
                </div>

                <div>
                  <BsFillCalendar2WeekFill />
                  <CalendarButtons>
                    <GoTriangleDown />
                    Jan 2021
                  </CalendarButtons>
                  <CalendarButtons>
                    <GoTriangleDown />
                    Dec 2021
                  </CalendarButtons>
                </div>
              </Calendar>

              <ContentSection>
                {/* Graphic */}
                <ContainerContentItemGraph flex="2">
                  <ContainerGraph></ContainerGraph>
                  <GreenRightBorder>
                    <img src={sap} />
                    <FiUpload />
                  </GreenRightBorder>
                </ContainerContentItemGraph>

                <ContainerContentItem></ContainerContentItem>
              </ContentSection>

              <ContentSection>
                {/* Graphic */}
                <ContainerContentItemGraph flex="2">
                  <ContainerGraph></ContainerGraph>
                  <GreenRightBorder>
                    <img src={sap} />
                    <FiUpload />
                  </GreenRightBorder>
                </ContainerContentItemGraph>

                <ContainerContentItem></ContainerContentItem>
              </ContentSection>
            </ContainerAbsolute>
          </ContainerContent>
        </Main>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
