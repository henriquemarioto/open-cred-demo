import { FaBell } from "react-icons/fa";
import { IoIosSearch, IoMdPerson, IoMdSettings } from "react-icons/io";
import { Container, IconButton, Input, InputContainer, NavHeader, Span } from "./style";

const HeaderMain = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default HeaderMain;
