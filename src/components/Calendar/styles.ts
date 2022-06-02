import styled from "styled-components";

export const Container = styled.section`
  width: 55%;
  background-color: var(--green);
  border-radius: 15px;
  padding: 5px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    > svg {
      height: 20px;
      width: 20px;
      color: var(--white);
    }
  }

  @media (min-width: 1920px) {
    
  }
`;

export const CalendarButtons = styled.button`
  background-color: var(--green);
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 20px;
  border: 2px solid var(--white);
  color: var(--white);
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;