import styled from "styled-components";

export const NewAlbumsWrapper = styled.div`
    width: 100%;

    .album-list {
        position: relative;
        height: 186px;
        margin: 20px 0px 37px;
        border: 1px solid rgb(211, 211, 211);
        background-color: rgb(240, 240, 240);
        .pre,
        .next {
            position: absolute;
            top: 71px;
            width: 17px;
            height: 17px;
            line-height: 17px;
            background-position: -260px -75px;
            cursor: pointer;
        }
        .next {
            right: 0;
            background-position: -300px -75px;
        }
        .album-list-carousel {
            width: 645px;
            height: 150px;
            margin-top: 28px;
            margin-left: 16px;
            .page {
                display: flex !important;
                width: 100%;
                /* background-color: pink; */
                .album-item {
                    position: relative;
                    width: 118px;
                    height: 150px;
                    margin-left: 11px;
                    /* background-color: red; */
                    img {
                        width: 100px;
                        height: 100px;
                    }
                    .cover {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 118px;
                        height: 100px;
                        text-indent: -99999px; /* 做优化SEO */
                        background-position: 0px -570px;
                    }
                    .album-name,
                    .singer-name{
                        display: block;
                        width: 100%;
                    }
                    .album-name {
                        margin-top: 2px;
                        font-size: 12px;
                        color: black;
                    }
                    .singer-name {
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;
