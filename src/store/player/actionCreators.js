import * as actionTypes from "./contants";
import { getSongDetail, getLyric } from "../../service/play";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

// 改变当前播放的歌曲
export const changeCurrentSongAction = (song) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: song,
});

// 改变播放列表
export const changePlayListAction = (res) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: res,
});
// 改变当前播放歌曲的index
export const changeCurrentSongIndexAction = (res) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex: res,
});

// 改变播放器的顺序
export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence: sequence,
});
// 改变当前播放歌曲的歌词
export const changLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList,
});

// 改变当前播放歌曲的歌词的下标，因为别的地方可能会用到
export const changLyricListIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index,
});


// 在播放器中切换当前播放的音乐，因为设计到较多的redux相关的东西
// 故将其放在此处
// target =-1 || 1
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().player.playList;
        const sequence = getState().player.sequence;
        let currentSongIndex = getState().player.currentSongIndex;
        switch (sequence) {
            case 1:
                // 获得下一个播放歌曲的index
                let randomIndex = getRandomNumber(playList.length);
                // 防止重复
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandomNumber(playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            // 除了1，也就是随机播放，其他的都是默认下一首
            default:
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0)
                    currentSongIndex = playList.length - 1;
                break;
        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        // 请求歌词
        dispatch(getLyricAction(currentSong.id));
    };
};

// 为什么在这里做逻辑判断需要好好注意一下
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 这已经不需要判断是否为空数组了，在playList没有找到那么就加入即可

        // 1.根据id判断playList中是否已经存在该歌曲
        const playList = getState().player.playList || [];
        // console.log(getState());
        const songIndex = playList.findIndex((song) => song.id === ids);

        // 2.判断是否找到歌曲
        let song = null;
        if (songIndex !== -1) {
            // 可以找到歌曲
            // 查找歌曲
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            dispatch(getLyricAction(song.id));
        } else {
            // 没有找到歌曲
            // 请求歌曲数据
            getSongDetail(ids).then((res) => {
                song = res.songs && res.songs[0];
                // console.log(song);
                if (!song) return;
                // 1.将最新请求到的歌曲添加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                // console.log(newPlayList);

                // 2.更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));

                // 3.请求歌词
                dispatch(getLyricAction(song.id));
            });
        }
        // getSongDetail(ids).then((res) => {
        //     // console.log(res.songs[0]);
        //     dispatch(changeCurrentSongAction(res));
        // });
    };
};

export function getLyricAction(id) {
    return (dispatch) => {
        getLyric(id).then((res) => {
            const lyric = res?.lrc?.lyric;
            // console.log(lyric);
            const lyricList = parseLyric(lyric);
            dispatch(changLyricListAction(lyricList));
        });
    };
}
