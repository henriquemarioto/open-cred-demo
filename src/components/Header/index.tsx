import {
  AccountSection,
  CloseIcon,
  Container,
  ContainerPath,
  ContainerSectionDetails,
  DivIcon,
  DivisionHorizontal,
  DivisionVertical,
  Img,
  List,
  MainItem,
  MainSection,
  SubItem,
  SubSection,
  Title,
} from "./styles";
import logo from "../../assets/imgs/logo.png";
import { FaHome } from "react-icons/fa";
import { IoIosCard, IoIosCloseCircle, IoIosStats, IoMdPerson } from "react-icons/io";

const Header = () => {
  return (
    <Container>
      <Img src={logo} />
      <DivisionHorizontal />
      <ContainerPath>
        <MainSection>
          <List>
            <MainItem className="main-selected">
              <DivIcon iconColor="white">
                <FaHome />
              </DivIcon>
              <span>Visão Geral</span>
            </MainItem>
          </List>
        </MainSection>

        <SubSection>
          <List>
            <SubItem className="top">
              <DivIcon>
                <IoIosStats />
              </DivIcon>

              <span>Cateira de Clientes</span>
            </SubItem>

            <ContainerSectionDetails>
              <SubSection>
                <List>
                  <SubItem className="sub-selected">
                    <DivIcon>
                      <IoIosCard />
                    </DivIcon>

                    <span>Fazenda Agro Mais</span>

                    <CloseIcon>
                      <IoIosCloseCircle />
                    </CloseIcon>
                  </SubItem>

                  <SubItem>
                    <DivIcon>
                      <IoIosCard />
                    </DivIcon>

                    <span>Fazenda Agro Top</span>

                    <CloseIcon>
                      <IoIosCloseCircle />
                    </CloseIcon>
                  </SubItem>
                </List>
              </SubSection>
            </ContainerSectionDetails>
          </List>
        </SubSection>

        <AccountSection>
          <Title>Conta</Title>

          <List>
            <SubItem>
              <DivIcon>
                <IoMdPerson />
              </DivIcon>

              <span>Rafael</span>
            </SubItem>

            <SubItem>
              <DivIcon>
                <IoIosCard />
              </DivIcon>

              <span>Configurações</span>
            </SubItem>
          </List>
        </AccountSection>
      </ContainerPath>
    </Container>
  );
};

export default Header;
