import * as actionTypes from "./contants";
const initState = {
    // 当前播放歌曲的信息，使用一个对象存储
    currentSong: {},
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            /* 这里需要注意，一定要有名字currentSong，不能使用简写，因为 action.currentSong 不符合字符串，
            对象的键只能字符串*/
            return { ...state, currentSong: action.currentSong };
        default:
            return state;
    }
}
export default reducer;
