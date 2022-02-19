/* 
该组件是recommend排行榜中的一列组件
*/
import React, { memo } from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
    getSongDetailAction,
    addSongToPlayListAction,
} from "@/store/player/actionCreators";

import { RcmTopRankingWrapper } from "./style";
const RcmTopRanking = memo((props) => {
    const { info = {} } = props;
    // console.log(props);
    const dispatch = useDispatch();
    const playMusic = (item) => {
        dispatch(getSongDetailAction(item.id));
    };
    const addSongToPlayList = (id) =>{
        dispatch(addSongToPlayListAction(id));
    }
    return (
        <RcmTopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={info.coverImgUrl} alt={info.name} />
                    <a href="todo" className="image_cover">
                        {info.name}
                    </a>
                </div>
                <div className="info">
                    <a href="todo">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {info.tracks?.slice(0, 10).map((item, index) => {
                    return (
                        <div key={item.id} className="list-item">
                            <div className="rank">{index + 1}</div>
                            <div className="info">
                                <Link
                                    className="name text-nowrap"
                                    to={`/song?id=${info.id}`}
                                >
                                    {item.name}
                                </Link>
                                <div className="operate">
                                    <button
                                        className="btn sprite_02 play"
                                        onClick={(e) => {
                                            playMusic(item);
                                        }}
                                    ></button>
                                    <button
                                        className="btn sprite_icon2 addto"
                                        onClick={(e) => {
                                            addSongToPlayList(item.id);
                                        }}
                                    ></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </RcmTopRankingWrapper>
    );
});

export default RcmTopRanking;
