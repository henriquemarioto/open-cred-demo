import Header from "./components/Header";
import {
  Container,
  ContainerAbsolute,
  ContainerContent,
  ContainerItems,
  ContentSection,
  Main,
  SerasaCard,
  SerasaInfo,
  RestritivosTitle,
  UpdateContainer,
  Footer,
} from "./styles";

import HorizontalDivision from "./components/HorizontalDivision";
import sap from "./assets/imgs/sap.svg";
import PieGraph from "./components/Charts/PieGraph";
import TableDRE from "./components/Tables/TableDRE";
import TableHistory from "./components/Tables/TableHistory";
import TableBank from "./components/Tables/TableBank";
import BarPerformanceGraph from "./components/Charts/BarPerformanceGraph";
import BarBankGraph from "./components/Charts/BarBankGraph";
import HeaderMain from "./components/HeaderMain";
import AccountInfo from "./components/AccountInfo";
import BankData from "./components/BankData";
import ContainerContentItem from "./components/ContainerContentItem";
import ContainerContentItemGraph from "./components/ContainerContentItemGraph";
import Calendar from "./components/Calendar";

import openSafe from "./assets/imgs/opensafe.svg";
import serasa from "./assets/imgs/serasaexperian.svg";

import { AiOutlineReload } from "react-icons/ai";
import {
  FiCheckCircle,
  FiMinusCircle,
  FiSlash,
  FiUpload,
} from "react-icons/fi";
import { IoIosLock } from "react-icons/io";

function App() {
  return (
    <Container>
      <Header />

      <Main>
        <HeaderMain />

        <ContainerContent>
          <ContainerAbsolute>
            <AccountInfo />

            <ContentSection>
              {/* Limite Risco Liquidez */}
              <ContainerContentItem>
                <BankData />
              </ContainerContentItem>

              {/* Pie chart */}
              <ContainerContentItem>
                <PieGraph />
              </ContainerContentItem>

              {/* DRE Table */}
              <ContainerContentItemGraph
                flex="2.5"
                icon={<IoIosLock />}
                textSvg={openSafe}
              >
                <TableDRE />
              </ContainerContentItemGraph>

              {/* Serasa */}
              <ContainerContentItem>
                {/* green */}
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

                {/* yellow */}
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

                {/* gray */}
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

            {/* center division */}
            <HorizontalDivision />
            <HorizontalDivision />
            {/* center calendar */}
            <Calendar />

            <ContentSection>
              {/* Graphic Performance */}
              <ContainerContentItemGraph flex="2" icon={<FiUpload />} textSvg={sap}>
                <BarPerformanceGraph />
              </ContainerContentItemGraph>
              {/* History table */}
              <ContainerContentItem>
                <TableHistory />
              </ContainerContentItem>
            </ContentSection>

            <ContentSection>
              {/* Graphic Bank */}
              <ContainerContentItemGraph flex="2" icon={<FiUpload />} textSvg={sap}>
                <BarBankGraph />
              </ContainerContentItemGraph>

              {/* Bank table */}
              <ContainerContentItem>
                <TableBank />
              </ContainerContentItem>
            </ContentSection>

            {/* Footer */}
            <Footer>
              <span>@ 2022, OpenCred</span>
              <span>Blog</span>
              <span>License</span>
            </Footer>
          </ContainerAbsolute>
        </ContainerContent>
      </Main>
    </Container>
  );
}

export default App;
