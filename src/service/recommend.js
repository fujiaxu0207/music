import axios from "./request";

export const getTopBanner = () =>
    axios({
        url: "/banner",
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

// 获取排行榜歌单
export function getTopList() {
    return axios({
        url: "/toplist",
    });
}

// 获取某个歌单的详细信息
export function getPlayListDetail(id) {
    return axios({
        url: "/playlist/detail",
        params: {
            id
        },
    });
}
