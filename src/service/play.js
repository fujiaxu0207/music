// 该文件是与播放相关的网络请求

import axios from "./request";

// 得到ids 的歌曲的详情
export function getSongDetail(ids) {
    return axios({
        // method: "get",
        url: "/song/detail",
        params: {
            ids,
        },
    });
}

export function getLyric(id) {
    return axios({
        url: "/lyric",
        params: {
            id 
        }
    })
}