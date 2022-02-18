// 该文件是与播放相关的网络请求

import axios from "./request";

export function getSongDetail(ids) {
    return axios({
        // method: "get",
        url: "/song/detail",
        params: {
            ids,
        },
    });
}
