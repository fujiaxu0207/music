import styled from "styled-components";
import bannerSprite from "@/assets/img/banner_sprite.png";
import downloadClient from "@/assets/img/download.png";

export const Bannerwrapper = styled.div`
    width: 100%;
    background-image: url(${(props) => props.bgUrl}); //这样传参的
    background-repeat: no-repeat;
    background-size: 6000px;
    background-position: center center;
`;
export const BannerContent = styled.div`
    position: relative; // 为了两个箭头的决定定位
    display: flex;
    height: 270px;
    background-color: red;
    margin: 0 auto;
    .swiper-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 37px;
        height: 63px;
        background-color: transparent;
        background-image: url(${bannerSprite});
        background-position: 0 -360px;
        cursor: pointer;
        &:hover {
            background-position: 0 -430px;
        }
    }
    .swiper-arrow.pre-arrow {
        left: -68px;
    }
    .swiper-arrow.next-arrow {
        right: -68px;
        background-position: 0 -508px;
        &:hover {
            background-position: 0 -578px;
        }
    }
`;

export const BannerLeft = styled.div`
    width: 730px;
    /* overflow: hidden; */
    .ant-carousel .slick-dots li.slick-active {
        width: 16px;
    }
    .swiper .btn li button {
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }
    .swiper .btn li.slick-active button {
        background-color: red;
    }
    /* a的大小 */
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    /* img的大小 */
    img {
        width: 100%;
        height: 100%;
    }
`;

export const BannerRight = styled.a`
    height: 100%;
    width: 254px;
    background-image: url(${downloadClient});
`;
