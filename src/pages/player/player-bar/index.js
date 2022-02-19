import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    getSongDetailAction,
    changeSequenceAction,
    changeCurrentIndexAndSongAction,
    changLyricListIndexAction,
} from "@/store/player/actionCreators";

import { Link } from "react-router-dom";

import ShowPlayList from "./show-playList";

import { Slider, message } from "antd";

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
    // playList 是否显示
    const [isShow, setIsShow] = useState(false);

    // redux-hook
    const {
        currentSong = {},
        currentSongIndex = 0,
        sequence = 0,
        playList = [],
        lyricList = [],
        lyricListIndex = 0,
    } = useSelector(
        (state) => ({
            currentSong: state.player.currentSong,
            currentSongIndex: state.player.currentSongIndex,
            sequence: state.player.sequence,
            playList: state.player.playList,
            lyricList: state.player.lyricList,
            lyricListIndex: state.player.lyricListIndex,
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    const audioRef = useRef();

    useEffect(() => {
        dispatch(getSongDetailAction(1357399743));
    }, [dispatch]);

    // 挂载组件后，就设置src，当currentSong 改变时，在改变
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        // 第一次播放会发生错误，play是一个promise，也可以使用一个state来保存是否为第一次
        // 第一次进入就不自动播放，当currentSong发送改变时，那么就自动播放
        // 当currentsong发送变化时，就自动播放
        audioRef.current
            .play()
            .then((res) => {
                setIsPlaying(true);
            })
            .catch((err) => {
                setIsPlaying(false);
            });
    }, [currentSong]);

    useEffect(() => {
        message.destroy();
    }, []);
    // other hooks

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
        const currentTime = e.target.currentTime * 1000; // 单位是秒所以 * 1000
        if (!isChanging) {
            setCurrentTime(currentTime);
            setProgress((currentTime / duration) * 100);
        }
        if (currentTime >= duration) {
            setIsPlaying(false);
        }
        // console.log(currentTime);
        //匹配歌词
        let i = 0;
        // console.log(currentTime);
        for (i; i < lyricList.length; i++) {
            // 如果此时歌词的时间点小于播放的时间点，那么前一句就是的
            // console.log(lyricList[i].time);
            if (lyricList[i].time > currentTime) {
                break;
            }
        }
        // 得到当前歌词应该对应的下标，最后一句不需要的单独处理了
        // 如果是最后一句，那么 i === length ，这里-1就好
        i = i - 1 < 0 ? 0 : i - 1;
        // console.log(i);
        // 当playList没有显示时，立即调出歌词
        if (!isShow) {
            message.open({
                key: "lyric",
                content: lyricList[i]?.content,
                duration: 0,
                className: "lyric-class",
            });
        } else {
            message.destroy();
        }
        if (i !== lyricListIndex || i === 0) {
            dispatch(changLyricListIndexAction(i));
            // console.log(lyricList[i].content);
            if (lyricList[i]?.content && !isShow) {
                message.open({
                    key: "lyric",
                    content: lyricList[i]?.content,
                    duration: 0,
                    className: "lyric-class",
                });
            } else {
                message.destroy();
            }
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
    // 改变播放顺序
    const changeSequence = () => {
        // console.log(sequence);
        dispatch(changeSequenceAction((sequence + 1) % 3));
    };
    // 上/下一首
    const changeMusic = (tag) => {
        // console.log(1);
        dispatch(changeCurrentIndexAndSongAction(tag));
    };

    const handleEnded = () => {
        // 循环播放
        if (sequence === 2) {
            // setIsLoop(true);
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            if (playList.length === 1) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                changeMusic(1);
            }
        }
    };

    const changeIsShow = useCallback(() => {
        setIsShow(!isShow);
    }, [isShow]);
    return (
        <PlaybarWrapper className="sprite_player wrap-v1">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button
                        className="prev sprite_player"
                        onClick={(e) => {
                            changeMusic(-1);
                        }}
                    ></button>
                    <button
                        className="play sprite_player"
                        onClick={(e) => {
                            playMusic();
                        }}
                    ></button>
                    <button
                        className="next sprite_player"
                        onClick={(e) => {
                            changeMusic(1);
                        }}
                    ></button>
                </Control>
                {/* 播放器信息展示区 */}
                <PlayInfo>
                    <div className="image">
                        <Link
                            to={`/song?id=${currentSong.id}`}
                            className="sprite_player"
                        >
                            {currentSong.name + "123"}
                        </Link>
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
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button
                            className="sprite_player btn loop"
                            onClick={() => {
                                changeSequence();
                            }}
                        ></button>
                        <button
                            className="sprite_player btn playlist"
                            onClick={(e) => {
                                setIsShow(!isShow);
                            }}
                        >
                            {playList.length}
                        </button>
                    </div>
                </Operator>
                <ShowPlayList
                    playList={playList}
                    isShow={isShow}
                    currentSongIndex={currentSongIndex}
                    changeIsShow={changeIsShow}
                />
            </div>

            {/* 
                onTimeUpdate 是播放时间发生改变时的回调函数
            
            */}
            {/* 
                onTimeUpdate: 当时就更新事件
                loop: 设置是否循环
                onEnded: 是否播放完事件
            */}
            <audio
                ref={audioRef}
                onTimeUpdate={timeUpdate}
                onEnded={handleEnded}
            ></audio>
        </PlaybarWrapper>
    );
});

export default PlayBar;
