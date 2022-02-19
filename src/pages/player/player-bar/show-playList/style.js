import styled from "styled-components";

export const ShowPlayListWrapper = styled.div`
    position: absolute;
    display: ${(props) => {
        if (props.isShow) {
            return "block";
        } else {
            return "none";
        }
    }};
    bottom: 47px;
    width: 620px;
    height: 250px;
    margin-left: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    background-color: rgb(38, 37, 37);

    z-index: 9999;
    .header {
        height: 40px;
        background-color: #333;
        display: flex;
        justify-content: space-between;
        .number {
            color: #e2e2e2;
            margin-left: 20px;
            line-height: 40px;
            font: 16px;
        }
        .operator {
            display: flex;
            align-items: center;
            .delete-all {
                height: 30px;
                line-height: 30px;
                color: #ccc;
                background-color: #333;
                cursor: pointer;
            }
            .close {
                margin-top: 5px;
                width: 30px;
                height: 30px;
                text-indent: -999px;
                cursor: pointer;
                background-position: -195px 9px;
            }
        }
    }

    .play-list {
        width: 100%;
        height: 209px;
        overflow-y: auto;
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 28px;
            line-height: 28px;
            padding-left: 20px;
            padding-right: 10px;
            color: #ccc;
            background-color: rgb(38, 37, 37);
            cursor: pointer;
            .left {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex: 1;
                .song-operator {
                    display: none;
                    margin-right: 14px;
                    width: 14px;
                    height: 14px;
                    background-position: -51px -20px;
                }
            }
            .right {
                display: flex;
                width: 180px;
                .singer {
                    width: 100px;
                }
            }
            &:hover {
                background-color: rgb(23, 22, 23);
                color: #fff;
            }
            &:hover .song-operator {
                display: block;
                /* 多回家一层级好搞 */
                /* background-position: -51px -20px; */
            }
        }
        .item:nth-child(${(props) => props.currentSongIndex || 0}) {
            background-color: rgb(23, 22, 23);
            color: #fff;
        }
    }
`;
