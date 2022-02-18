import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "@/store/player/actionCreators";

import { Slider } from "antd";

import { getTime, getPlaySong } from "@/utils/format-utils";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
const PlayBar = memo(() => {
    // state and props
    // 当前播放时间, 毫秒
    const [currentTime, setCurrentTime] = useState(0);
    // 当前进度
    const [progress, setProgress] = useState(0);
    // 进度条是否在被手动滑动
    const [isChanging, setIsChanging] = useState(false);
    // 当前是否在播放歌曲
    const [isPlaying, setIsPlaying] = useState(false);
    // redux-hook
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

    // 挂载组件后，就设置src，当currentSong 改变时，在改变
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong]);
    // other hooks
    const audioRef = useRef();

    // 展示数据
    // const picUrl = (currentSong.al && currentSong.al.picUrl) || ""; // 直接使用可选链来代替
    const duration = currentSong.dt ? currentSong.dt : 0;
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const totalTime = getTime(duration);
    // let progress = currentTime / duration * 100;// 进度条 这个的变化必须引起组件的更新，所以应该使用state

    // 其他逻辑处理

    // 播放音乐的回调函数
    const playMusic = useCallback(() => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);
    // 更新音乐播放的时间
    function timeUpdate(e) {
        /* audio对象有一个currentcurrentTimeTime属性, 单位是秒 */
        // 这样是不行的，因为 currentTime 还未来得及改变
        // setCurrentTime(e.target.currentTime * 1000);
        // setProgress(currentTime / duration * 100)
        const currentTime = e.target.currentTime;
        if (!isChanging) {
            setCurrentTime(currentTime * 1000);
            setProgress(((currentTime * 1000) / duration) * 100);
        }
        if(currentTime * 1000 >= duration) {
            setIsPlaying(false);
        }
    }
    // 传入回调函数，使用useCallBback记忆函数，繁殖组件不必要的更新
    const sliderChange = useCallback(
        (value) => {
            setIsChanging(true);
            const currentTime = (value / 100) * duration;
            setCurrentTime(currentTime);
            setProgress(value);
        },
        [duration]
    );

    const sliderAfterChange = useCallback(
        (value) => {
            setIsChanging(false); // 反正都是异步，放在哪里都行
            const currentTime = ((value / 100) * duration) / 1000;
            //audioRef的currentTime的单位是秒
            audioRef.current.currentTime = currentTime; // 改变播放的时间
            setCurrentTime(currentTime * 1000);
            //实现如果没有播放，通过点击进度条就可以播放歌曲
            if (!isPlaying) {
                playMusic();
            }
        },
        [duration, isPlaying, playMusic]
    );
    return (
        <PlaybarWrapper className="sprite_player wrap-v1">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="prev sprite_player"></button>
                    <button
                        className="play sprite_player"
                        onClick={(e) => {
                            playMusic();
                        }}
                    ></button>
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
                            <Slider
                                defaultValue={0}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                            />
                            <div className="time">
                                <span className="now-time">
                                    {getTime(currentTime)}
                                </span>
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
            {/* 
                onTimeUpdate 是播放时间发生改变时的回调函数
            
            */}
            <audio ref={audioRef} onTimeUpdate={timeUpdate} loop={true}></audio>
        </PlaybarWrapper>
    );
});

export default PlayBar;
