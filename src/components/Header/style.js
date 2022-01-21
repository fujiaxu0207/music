import styled from "styled-components";
import sprite_01 from "@/assets/img/sprite_01.png";
export const HeaderWrapper = styled.div`
  /* 有了flexdiv就不会独占一行 */
  /* display: flex; */
  height: 75px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
    /* background-color: blue; */
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  .logo a {
    display: block;
    width: 157px;
    height: 100%;
    padding: 0 20px 0 0;
    background-position: 0 0;
  }

  a {
    /* 为了下面的三角形定位 */
    position: relative;
    display: block;
    font-size: 14px;
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    text-decoration: none;
    color: #ccc;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
  > a:last-of-type::after {
    content: "";
    position: absolute;
    top: 21px;
    right: -19px;
    width: 28px;
    height: 19px;
    background: url(${sprite_01}) -190px 0;
  }
  .active {
    background-color: #000;
    color: #fff;
    ::after {
      /* 必须要有content */
      content: "";
      position: absolute;
      bottom: -1px;
      left: 50%;
      width: 12px;
      height: 7px;
      transform: translateX(-50%);
      background-image: url(${sprite_01});
      background-position: -226px 0;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  /* flex里面的元素默认高度是100% */
  align-items: center;
  /* 当父元素没有给宽度时，margin可以撑大 */
  .search {
    width: 158px;
    height: 32px;
    border-radius: 32px;
    background-color: #fff;
    /* 学到了 */
    input::placeholder {
      font-size: 12px;
      color: #9b9b9b;
    }
  }
  /* 对于没有宽度的父盒子，只要设置marin就是挤开别人 */
  /* div {
      margin-left: 10px;
      background-color: red;
  } */
  .center {
    width: 90px;
    height: 32px;
    margin-left: 12px;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
    color: #ccc;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    &:hover {
      border-color: #cccccc;
      color: #ffffff;
    }
  }
  .login_btn {
    box-sizing: content-box;
    width: 28px;
    padding-right: 22px;
    margin-left: 20px;
    color: #787878;
    cursor: pointer;
    &:hover {
      color:#999;
    }
  }
`;
