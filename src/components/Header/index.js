import React, { memo } from "react";
import { NavLink, Link } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import {
  Input
} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

import ToTop from '@/pages/discover/toTop';

export default memo(function Header() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <div className="logo">
            <Link to={"/"}  className={"logo sprite_01"}></Link>
          </div>
          <NavLink to={"/discover"}>发现音乐</NavLink>
          <NavLink to={"/mine"}>我的音乐</NavLink>
          <NavLink to={"/friend"}>关注</NavLink>
          <a href="https://music.163.com/store/product" target={"blank"}>
            商城
          </a>
          <a href="https://music.163.com/st/musician" target={"blank"}>
            音乐人
          </a>
          <a href="https://music.163.com/#/download" target={"blank"}>
            下载客户端
          </a>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户"  
                                    prefix={<SearchOutlined style={{fontSize:'17px'}}/>}
          />
          <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="center">创作者中心</a>
          <div className="login_btn">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      <ToTop/>
    </HeaderWrapper>
  );
});
