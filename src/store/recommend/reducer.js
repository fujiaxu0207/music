import * as actionTypes from "./constants";
const initState = {
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    UpRanking: [],
    newRanking: [],
    originalRanking: [],
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return { ...state, topBanners: action.topBanners };
        case actionTypes.CHANGE_HOT_RECOMMAND:
            return { ...state, hotRecommends: action.hotRecommends };
        case actionTypes.CHANGE_NEW_ALBUM:
            return { ...state, newAlbums: action.newAlbums };
        case actionTypes.CHANGE_UP_RANKING:
            return { ...state, upRanking: action.upRanking };
        case actionTypes.CHANGE_NEW_RANING:
            return { ...state, newRanking: action.newRanking };
        case actionTypes.CHANGE_ORIGINAL_RANKING:
            return { ...state, originalRanking: action.originalRanking };
        default:
            return state;
    }
}

export default reducer;
