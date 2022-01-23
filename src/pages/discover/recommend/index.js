import React, { memo, useEffect } from "react";

import TopBanner from "./topBanner";
import RmdContent from "./rmdContent";

export default memo(function Recommend() {
    return (
        <>
            <TopBanner></TopBanner>
            <RmdContent></RmdContent>
        </>
    );
});
