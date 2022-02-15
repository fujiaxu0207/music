import React, { memo } from "react";

import HotRecommand from './hot-recommand';
import NewAlbums from './new-albums';
import Ranking from './recommend-ranking';
import { RmdContentWrapper, RecommendLeft,RecommendRight } from "./style";

export default memo(function RmdContent() {
    return (
        <RmdContentWrapper className="wrap-v2">
            {/* 推荐内容分为左右两个部分 */}
            <RecommendLeft>
                <HotRecommand/>
                <NewAlbums/>
                <Ranking/>
            </RecommendLeft>
            <RecommendRight>
                456
            </RecommendRight>
        </RmdContentWrapper>
    );
});
