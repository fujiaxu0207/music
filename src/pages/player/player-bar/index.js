import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "@/store/player/actionCreators";

import { Slider } from "antd";

import { getTime, getPlaySong } from "@/utils/format-utils";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
const PlayBar = memo(() => {
    const { currentSong = {} } = useSelector(
        (state) => ({
            currentSong: state.player.currentSong,
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch]);

    const audioRef = useRef();

    // const picUrl = (currentSong.al && currentSong.al.picUrl) || ""; // 直接使用可选链来代替
    const duration = currentSong.dt ? currentSong.dt : 0;
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const totalTime = getTime(duration);

    function playMusic() {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play();
    }
    return (
        <PlaybarWrapper className="sprite_player wrap-v1">
            <div className="content wrap-v2">
                <Control>
                    <button className="prev sprite_player"></button>
                    <button className="play sprite_player" onClick={(e) => {playMusic()}}></button>
                    <button className="next sprite_player"></button>
                </Control>
                {/* 播放器信息展示区 */}
                <PlayInfo>
                    <div className="image">
                        <a href="todo " className="sprite_player">
                            {currentSong.name + "123"}
                        </a>
                        <img src={currentSong.al?.picUrl} alt="hhh" />
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">
                                {currentSong.name}
                            </span>
                            <a className="singer-name" href="todo">
                                {singerName}
                            </a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} />
                            <div className="time">
                                <span className="now-time">02:30</span>
                                <span className="divider">/</span>
                                <span className="duration">{totalTime}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} ></audio>
        </PlaybarWrapper>
    );
});

export default PlayBar;
