import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  height: 29px;
  background-color: #c20c0c;
  .nav {
    margin-top: 2px;
    margin-left: 180px;
    overflow: hidden;
    a {
      margin: 15px 20px;
      margin-bottom: 0px;
      padding: 4px 13px;
      height: 20px;
      color: #fff;
      text-decoration: none;
      line-height: 21px;
      &:hover,
      &.active {
        border-radius: 15px;
        background: #9b0909;
      }
    }
  }
`;
