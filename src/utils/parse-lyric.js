/**
 * 
 *歌词格式 
 [00:35.900]哪怕好多盆水往下淋
 */

// 匹配的正则

// 一个括号是一个分组
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyric = "") {
    // 对每一行切割
    const lines = lyric.split("\n");
    // console.log(lines);
    const lyrics = [];

    for (let line of lines) {
        if (line !== "") {
            // 最后一行可能是空数据
            // 分为两部分
            // 因为格式固定，我们可以使用substring 或者正则来做

            //exec 会返回正则匹配的结果，是一个数组，0是总体的结果，后续的下标是每一个每组

            const res = parseExp.exec(line);
            if (!res) continue; //若没有结果
            // 将时间转换为毫秒
            const time1 = res[1] * 60 * 1000;
            const time2 = res[2] * 1000;
            // res[3] * 1 这里 *1 是将字符串转换为数字
            const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10;
            const time = time1 + time2 + time3;
            // 去除歌词前面的时间，留下剩余的内容，并去除前后的空格
            const content = line.replace(parseExp, "").trim();
            lyrics.push({time,content});
        }
    }
    // console.log(lyrics);
    return lyrics;
}
