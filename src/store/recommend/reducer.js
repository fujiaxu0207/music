import * as actionTypes from "./constants";
const initState = {
    topBanners: [],
    hotRecommends: [],
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return { ...state, topBanners: action.topBanners };
        case actionTypes.CHANGE_HOT_RECOMMAND:
            return { ...state, hotRecommends: action.hotRecommends };
        default:
            return state;
    }
}

export default reducer;
