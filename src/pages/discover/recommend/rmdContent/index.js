import React, { memo } from "react";
import { RmdContentWrapper, RecommendLeft,RecommendRight } from "./style";

export default memo(function RmdContent() {
    return (
        <RmdContentWrapper className="wrap-v2">
            {/* 推荐内容分为左右两个部分 */}
            <RecommendLeft>
                123
            </RecommendLeft>
            <RecommendRight>
                456
            </RecommendRight>
        </RmdContentWrapper>
    );
});
