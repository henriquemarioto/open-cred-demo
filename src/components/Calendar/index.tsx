import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { CalendarButtons, Container } from "./styles";

const Calendar = () => {
    return (
      <Container>
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
      </Container>
    );
}

export default Calendar