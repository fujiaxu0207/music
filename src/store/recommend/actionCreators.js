import * as actionTypes from "./constants";

import { getTopBanner, getHotRecommends } from "@/service/recommend";

export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
});

export const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMAND,
    hotRecommends: res.result,
});

export const getTopBannerAction = () => {
    /* dispath，若是一个函数，则会传入dispatch*/
    return (dispatch) => {
        getTopBanner().then((res) => {
            dispatch(changeTopBannerAction(res));
        });
    };
};

export const getHotRecommendAction = (limit) => {
    return (dispatch) => {
        getHotRecommends(limit).then((res) => {
            dispatch(changeHotRecommendAction(res));
        });
    };
};
