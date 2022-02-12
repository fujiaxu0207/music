import React, { memo } from "react";

import HotRecommand from './hot-recommand';
import { RmdContentWrapper, RecommendLeft,RecommendRight } from "./style";

export default memo(function RmdContent() {
    return (
        <RmdContentWrapper className="wrap-v2">
            {/* 推荐内容分为左右两个部分 */}
            <RecommendLeft>
                <HotRecommand></HotRecommand>
            </RecommendLeft>
            <RecommendRight>
                456
            </RecommendRight>
        </RmdContentWrapper>
    );
});
