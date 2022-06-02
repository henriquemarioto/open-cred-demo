import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 16px;
  }

  table {
    font-size: 10px;
    width: 100%;

    tr {
      text-align: right;

      th {
        padding: 10px 0;
      }

      td {
        padding: 6px 0;
        border-bottom: 1px solid var(--gray);
      }

      td:nth-child(1) {
        text-align: left;
      }

      td:nth-child(1n + 2) {
        color: var(--gray-500);
      }
    }
  }

  @media (min-width: 1920px) {
    gap: 20px;

    h2 {
      font-size: 20px;
    }

    table {
      font-size: 15px;

      tr {
        td {
          padding: 7px 0;
        }
      }
    }
  }
`;
