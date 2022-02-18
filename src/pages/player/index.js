import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
/* 这是歌曲详情页面的布局
    对于的url是 /song?id=xxx
*/
const player = memo(() => {
    return (
        <PlayerWrapper className="wrap-v2">
            <div className="content">
                <PlayerLeft>1</PlayerLeft>
                <PlayerRight>2</PlayerRight>
            </div>
        </PlayerWrapper>
    );
});

export default player;
