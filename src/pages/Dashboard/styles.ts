import styled from "styled-components";
import Background from "../../assets/img/table-bg.jpg";

export const Container = styled.div`
  padding: 15px 8%;
  color: #fff;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 40px 0;
  color: #72EFDB;
`;

export const Table = styled.table`
  width: 100%;
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  border-spacing: 0;
  padding-bottom: 20px;

  thead {
    /* text-align: left; */
    font-weight: bold;
    background-color: #0A1744;
    backdrop-filter: opacity(0.8);
    border-radius: 14px;

    tr {
      color: #72EFDB;
      height: 40px;
      width: 100%;

      th {
        padding: 32px 0 16px 32px;
        margin: 0;
        text-align: left;
        font-weight: bold;

        &:first-child {
          border-radius: 10px 0 0 10px;
        }

        &:nth-child(2) {
          text-align: right;
        }

        &:last-child {
          border-radius: 0 10px 10px 0;
        }
      }

    }
  }

  tbody {

    tr {
      height: 40px;
      width: 100%;

      td {
        padding: 24px 0 16px 32px;
        margin: 0 16px;
        text-align: left;
        border-bottom: 1px solid rgba(65, 85, 142, 1);
        color: #72EFDB;

        &:nth-child(2) {
          color: #fff;
          width: 70%;
          text-align: right;
        }

        &:first-child {
          color: #fff;
        }


      }

      &:last-child {
        td {
          border-bottom: none;
        }
      }

    }
  }

  @media (max-width: 768px) {
    tbody{
      tr {
        td {
          &:nth-child(2) {
            width: 40%;
          }
        }
      }
    }
  }
`;
