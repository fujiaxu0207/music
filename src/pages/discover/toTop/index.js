/* 这个组件只在discover里面有 */
import React, { memo, useEffect, useState } from "react";
import {TopBox} from './style';

export default memo(function Totop() {
    const [isShow, setisShow] = useState(false);
    useEffect(()=>{
        document.addEventListener("scroll",()=>{
            console.log(isShow);
            if(window.scrollY >= 75){
                
                setisShow(true);
            }else{
                
                setisShow(false);
            }
        })

        return ()=>{
            
        }
    },[])
    function goTop(){
        window.scrollTo(0,0);
    }
    return (
        <TopBox style={{"display": isShow?"block":"none"}} onClick={e=>{goTop()}} title="回到顶部">
            回到顶部
        </TopBox>
    );
});
