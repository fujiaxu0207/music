import * as actionTypes from './constants';

import {
    getTopBanner
} from '@/service/recommend';

export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})




export const getTopBannerAction = () => {
    /* dispath永远都是发布一个函数 */
    return (dispatch)=>{
        getTopBanner().then(res=>{
            dispatch(changeTopBannerAction(res));
        })
    }
}