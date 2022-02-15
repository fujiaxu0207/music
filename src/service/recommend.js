import axios from "./request";

export const getTopBanner = () =>
    axios({
        url: "banner",
    });

export function getHotRecommends(limit) {
    return axios({
        url: "/personalized",
        params: {
            limit,
        },
    });
}
// 发送网络请求 获取新专辑
export function getNewAlbums(limit) {
    return axios({
        url: "/album/new",
        params: {
            limit,
        },
    });
}
