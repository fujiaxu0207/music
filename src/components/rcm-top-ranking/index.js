/* 
该组件是recommend排行榜中的一列组件
*/
import React, { memo } from "react";
import { Link } from "react-router-dom";

import { RcmTopRankingWrapper } from "./style";
const RcmTopRanking = memo((props) => {
    const { info = {} } = props;
    // console.log(props);
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
                            <Link className="info" to={`/song?id=${info.id}`}>
                                <span className="name text-nowrap">
                                    {item.name}
                                </span>
                                <div className="operate">
                                    <button className="btn sprite_02 play"></button>
                                    <button className="btn sprite_icon2 addto"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </Link>
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
