import React, { memo, useEffect } from "react";

import { connect } from "react-redux";
import { getHotRecommendAction } from "@/store/recommend/actionCreators";

import RcmdThemeHeader from "@/components/rcm-theme-header";
import SongsCover from "@/components/songs-cover";

import { HotRecommendWrapper } from "./style";

const HotRecommend = function (props) {
    const keywords = ["华语", "流行", "摇滚", " 民谣", "电子"];
    const { getRecommends, hotRecommends = [] } = props;
    useEffect(() => {
        getRecommends();
    }, [getRecommends]);
    return (
        <HotRecommendWrapper>
            <RcmdThemeHeader
                title={"热门推荐"}
                keywords={keywords}
            ></RcmdThemeHeader>
            <div className="recommand-list">
                {hotRecommends.map((item) => {
                    return <SongsCover key={item.id} info={item}/>
                })}
            </div>
            {/* <RcmdThemeHeader title={"榜单"}></RcmdThemeHeader> */}
        </HotRecommendWrapper>
    );
};

export default memo(
    connect(
        (store) => {
            // console.log(store.recommend.hotRecommends);
            return { hotRecommends: store.recommend.hotRecommends };
        },
        (dispatch) => {
            return {
                getRecommends: () => dispatch(getHotRecommendAction(8)),
            };
        }
    )(HotRecommend)
);
