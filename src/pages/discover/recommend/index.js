import React, { memo, useEffect } from 'react';
import {getTopBanner} from '@/service/recommend.js';
export default memo(function Recommend() {
    useEffect(()=>{
        getTopBanner().then(res=>{
            console.log(res);
        })
    })
  return <div>123weadasd</div>;
});
