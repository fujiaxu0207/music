import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
    getUpRankingAction,
    getNewRankingAction,
    getOriginalRankingAction,
} from "@/store/recommend/actionCreators";

import RcmdThemeHeader from "@/components/rcm-theme-header";
import RcmTopRanking from "@/components/rcm-top-ranking";
import { RankingWrapper } from "./style";

const Ranking = memo(() => {
    const dispatch = useDispatch();
    const { upRanking, newRanking, originalRanking } = useSelector(
        (state) => ({
            upRanking: state.recommend.upRanking,
            newRanking: state.recommend.newRanking,
            originalRanking: state.recommend.originalRanking,
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getUpRankingAction(19723756));
        dispatch(getNewRankingAction(3779629));
        dispatch(getOriginalRankingAction(2884035));
    }, [dispatch]);

    return (
        <RankingWrapper>
            <RcmdThemeHeader title={"榜单"} />
            <div className="tops">
                <RcmTopRanking info={upRanking} />
                <RcmTopRanking info={newRanking} />
                <RcmTopRanking info={originalRanking} />
            </div>
        </RankingWrapper>
    );
});

export default Ranking;
