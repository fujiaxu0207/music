import * as actionTypes from "./constants";

import {
    getTopBanner,
    getHotRecommends,
    getNewAlbums,
    getPlayListDetail,
} from "@/service/recommend";

export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
});

export const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMAND,
    hotRecommends: res.result,
});

export const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums,
});

export const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist,
});
export const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANING,
    newRanking: res.playlist,
});
export const changeOriginalRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGINAL_RANKING,
    originalRanking: res.playlist,
});

/* 在redux使用中间件，发送网络请求 */
export const getTopBannerAction = () => {
    /* dispath，若是一个函数，则会传入dispatch*/
    return (dispatch) => {
        getTopBanner().then((res) => {
            dispatch(changeTopBannerAction(res));
        });
    };
};

// 获得热门推荐
export const getHotRecommendAction = (limit) => {
    return (dispatch) => {
        getHotRecommends(limit).then((res) => {
            dispatch(changeHotRecommendAction(res));
        });
    };
};

// 获取新歌版单
export const getNewAlbumsAction = (limit) => {
    return (dispatch) => {
        getNewAlbums(limit).then((res) => {
            dispatch(changeNewAlbumsAction(res));
        });
    };
};
// 获取飙升榜单
export const getUpRankingAction = (id) => {
    return (dispatch) => {
        getPlayListDetail(id).then((res) => {
            dispatch(changeUpRankingAction(res));
        });
    };
};
// 获取新歌榜单
export const getNewRankingAction = (id) => {
    return (dispatch) => {
        getPlayListDetail(id).then((res) => {
            dispatch(changeNewRankingAction(res));
        });
    };
};
// 获取原创榜单
export const getOriginalRankingAction = (id) => {
    return (dispatch) => {
        getPlayListDetail(id).then((res) => {
            dispatch(changeOriginalRankingAction(res));
        });
    };
};
