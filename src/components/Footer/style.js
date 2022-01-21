import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d3d3d3;
  .footer-content {
    display: flex;
    color: #999;
    font-size: 12px;
    justify-content: space-between;
    .footer-left {
      padding-top: 15px;
      a {
        text-decoration: none;
      }
      span.line {
        margin: 0 10px;
      }
    }
    .footer-right {
        display: flex;
        margin-top: 15px;
      a {
        display: block;
        width: 50px;
        height: 45px;
        background-size: 110px 552px;
      }
      a:not(:first-child) {
          margin-left: 10px;
      }
      .r1 {
        background-position: -63px -456.5px;
      }
      .r2 {
        background-position: -63px -101px;;
      }
      .r3 {
        background-position: 0px 0px;
      }
      .r4 {
        background-position: -63px -50px;
      }
      .r5 {
        background-position: 0px -101px;
      }
    }
  }
`;
