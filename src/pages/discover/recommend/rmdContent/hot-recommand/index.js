import React, { memo,useEffect } from 'react'

import {connect} from 'react-redux'
import {getHotRecommendAction} from '@/store/recommend/actionCreators'

import RcmdThemeHeader from '@/components/rcm-theme-header';

import {HotRecommendWrapper} from './style';

const HotRecommend = function(props) {
  const keywords = ["华语","流行", "摇滚"," 民谣", "电子"];
  const {getRecommends,HotRecommends} = props;
  console.log(HotRecommends);
  useEffect(()=>{
    getRecommends();
  },[getRecommends])
  return (
    <HotRecommendWrapper>
        <RcmdThemeHeader title={"热门推荐"} keywords={keywords}></RcmdThemeHeader>
        <div className="recommand-list">
          {/* {HotRecommends.map((item)=>{
            return (
              <div>{item.name}</div>
            )
          })} */}
        </div>
    </HotRecommendWrapper>
  )
}

export default memo(connect(
  (store)=>{
    return {HotRecommends:store.recommend.HotRecommends}
  },
  (dispatch)=>{
    return {
      getRecommends: ()=>dispatch(getHotRecommendAction(8))
    }
  }
)(HotRecommend)
);