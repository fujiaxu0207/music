import * as actionTypes from "./constants";
const initState = {
  topBanners: [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}

export default reducer;
