import * as actionTypes from "./constants";
const initState = {
    topBanners: [],
    hotRecommends: [],
    newAlbums:[]
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return { ...state, topBanners: action.topBanners };
        case actionTypes.CHANGE_HOT_RECOMMAND:
            return { ...state, hotRecommends: action.hotRecommends };
        case actionTypes.CHANGE_NEW_ALBUM:
            return {...state,newAlbums: action.newAlbums}
        default:
            return state;
    }
}

export default reducer;
