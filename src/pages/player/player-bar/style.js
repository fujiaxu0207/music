import styled from "styled-components";

export const PlaybarWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 52px;
    bottom: 0;
    background-position: 0 0;
    background-repeat: repeat;
    .content {
        position: relative;/* 为了showPlayList定位准备 */
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
        height: 47px;
    }
`;

export const Control = styled.div`
    display: flex;
    align-items: center;
    .prev,
    .next {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    .prev {
        background-position: 0 -130px;
        &:hover {
            background-position: -30px -130px;
        }
    }
    .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        cursor: pointer;
        /* 听过props的isPlaying 来判断当前播放的精灵图的背景位置 */
        background-position: 0
            ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
    .next {
        background-position: -80px -130px;
        &:hover {
            background-position: -110px -130px;
        }
    }
`;
export const PlayInfo = styled.div`
    display: flex;
    width: 642px;
    align-items: center;

    .image {
        position: relative;
        width: 34px;
        height: 34px;
        border-radius: 5px;
        a {
            position: absolute;
            top: 0;
            left: 0%;
            width: 100%;
            height: 100%;
            background-position: 0 -80px;
            text-indent: -9999px;
        }
        img {
            width: 100%;
        }
    }

    .info {
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;

        .song {
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;

            .singer-name {
                color: #a1a1a1;
                margin-left: 10px;
            }
        }

        .progress {
            display: flex;
            align-items: center;

            .ant-slider {
                width: 493px;
                margin-right: 10px;

                .ant-slider-rail {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png")})
                        right 0;
                }

                .ant-slider-track {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png")})
                        left -66px;
                }

                .ant-slider-handle {
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    background: url(${require("@/assets/img/sprite_icon.png")})
                        0 -250px;
                }
            }

            .time {
                .now-time {
                    color: #e1e1e1;
                }
                .divider {
                    margin: 0 3px;
                }
            }
        }
    }
`;

export const Operator = styled.div`
    display: flex;
    position: relative;
    top: 5px;

    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .favor {
        background-position: -88px -163px;
    }

    .share {
        background-position: -114px -163px;
    }

    .right {
        display: flex;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
            background-position: -2px -248px;
        }

        .loop {
            background-position: ${(props) => {
                // console.log(props.sequence);

                switch (props.sequence) {
                    case 1:
                        return "-66px -248px";
                    case 2:
                        return "-66px -344px";
                    default:
                        return "-3px -344px";
                }
            }};
        }
        .playlist {
            width: 59px;
            color: #666;
            text-indent: 25px;
            background-position: -42px -68px;
        }
    }
`;
