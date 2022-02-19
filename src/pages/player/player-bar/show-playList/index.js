import React, { memo } from "react";

import { useDispatch } from "react-redux";
import { getSongDetailAction } from "@/store/player/actionCreators";
import { getTime } from "@/utils/format-utils";
import { ShowPlayListWrapper } from "./style";
const ShowPlayList = memo((props) => {
    // console.log(props.isShow);
    const { playList, currentSongIndex ,changeIsShow} = props;
    const dispatch = useDispatch();

    const changeCurrentSong = (id) => {
        dispatch(getSongDetailAction(id));
    };
    // console.log(playList);
    return (
        <ShowPlayListWrapper
            isShow={props.isShow}
            currentSongIndex={currentSongIndex + 1}
        >
            <div className="header">
                <h4 className="number">播放列表({playList.length || 0})</h4>
                <div className="operator">
                    <button className="delete-all">清除</button>
                    <button className="close sprite_playList" onClick={e=>{changeIsShow()}}></button>
                </div>
            </div>
            <div className="play-list">
                {playList.map((item, index) => {
                    return (
                        <div className="item" key={item.id}
                            onClick={e=>{changeCurrentSong(item.id)}}>
                            <div className="left">
                                <div className="song-name">{item.name}</div>
                                <div className="song-operator sprite_playList"></div>
                            </div>
                            <div className="right">
                                <div className="singer text-nowrap">
                                    {item?.ar[0]?.name}
                                </div>
                                <div className="total-time">
                                    {getTime(item.dt)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ShowPlayListWrapper>
    );
});

export default ShowPlayList;
