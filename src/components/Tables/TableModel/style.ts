import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 20px;
  }

  table {
    font-size: 15px;
    width: 100%;

    > tr {
        text-align: right;

      > th {
        padding: 10px 0;
      }

      > td {
        padding: 7px 0;
        border-bottom: 1px solid var(--gray);
      }

      > td:nth-child(1) {
          text-align: left;
      }

      > td:nth-child(1n + 2) {
        color: var(--gray-500);
      }
    }
  }
`;
