import React, { memo } from "react";
import { FooterWrapper } from "./style";

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-content wrap-v2">
        <div className="footer-left">
          <a href="https://st.music.163.com/official-terms/service">服务条款</a>
          <span className="line">|</span>
          <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
          <span className="line">|</span>
          <a href="https://st.music.163.com/official-terms/children">儿童隐私政策</a>
          <span className="line">|</span>
          <a href="https://music.163.com/st/staticdeal/complaints.html">版权投诉指引</a>
          <span className="line">|</span>
          <a href="https://music.163.com/#">意见反馈</a>
          <span className="line">|</span>
          <a href="https://music.163.com/ui/resource">广告合作</a>
          <br />
          <span>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
        </div>
        <div className="footer-right">
            <a href="#" className="sprite_03 r1"></a>
            <a href="#" className="sprite_03 r2"></a>
            <a href="#" className="sprite_03 r3"></a>
            <a href="#" className="sprite_03 r4"></a>
            <a href="#" className="sprite_03 r5"></a>
        </div>
      </div>
    </FooterWrapper>
  );
});
