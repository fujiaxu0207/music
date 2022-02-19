import * as actionTypes from "./contants";
const initState = {
    // 当前播放歌曲的信息，使用一个对象存储
    currentSong: {},
    // 播放列表
    playList: [],
    // 当前歌曲在playList中的index
    currentSongIndex: 0,
    // 当前播放的顺序
    sequence: 0, // 0 顺序 1 随机 2 单曲循环
    // 把歌词分为一个数组
    /* 
        每个数组是一个对象{时刻 毫秒，歌词}
    */
    lyricList: [],
    // 歌词链表中，当前句的下标
    lyricListIndex:0,
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            /* 这里需要注意，一定要有名字currentSong，不能使用简写，因为 action.currentSong 不符合字符串，
            对象的键只能字符串*/
            return { ...state, currentSong: action.currentSong };
        case actionTypes.CHANGE_PLAY_LIST:
            return { ...state, playList: action.playList };
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return { ...state, currentSongIndex: action.currentSongIndex };
        // 改变播放顺序
        case actionTypes.CHANGE_SEQUENCE:
            return { ...state, sequence: action.sequence };
        // 改变歌词
        case actionTypes.CHANGE_LYRIC_LIST:
            return {...state,lyricList:action.lyricList}
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return {...state,lyricListIndex:action.index}
        default:
            return state;
    }
}
export default reducer;
