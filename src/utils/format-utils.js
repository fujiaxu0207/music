export function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}
// 得到播放时间的分 ： 秒 00 : 00
export function getTime(duration) {
    duration = duration / 1000; // 转换为秒
    let m =
        Math.floor(duration / 60) < 10
            ? "0" + Math.floor(duration / 60)
            : Math.floor(duration / 60);
    let s =
        Math.floor(duration % 60) < 10
            ? "0" + Math.floor(duration % 60)
            : Math.floor(duration % 60);
    return m + ":" + s;
}
export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
