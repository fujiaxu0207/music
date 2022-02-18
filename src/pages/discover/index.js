import React, { memo } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import Recommend from "./recommend";
import ToTop from "@/pages/discover/toTop";
import { NavWrapper } from "./style";

export default memo(function Discover() {
  return (
    <>
      <NavWrapper>
        <div className="nav-wraper wrap-v1">
          <div className="nav">
            <NavLink to={"/discover/recommend"}>推荐</NavLink>
            <NavLink to={"/discover/rank"}>排行榜</NavLink>
            <NavLink to={"/discover/t"}>歌单</NavLink>
            <NavLink to={"/discover/b"}>主播电台</NavLink>
            <NavLink to={"/discover/singer"}>歌手</NavLink>
            <NavLink to={"/discover/new"}>新碟上架</NavLink>
          </div>
        </div>
      </NavWrapper>
      {/* 会按照定义的顺序一个Switch，一个的比较 */}
      <Switch>
        <Route path={"/discover/recommend"} component={Recommend}></Route>
        <Redirect  to={"/discover/recommend"}></Redirect>
      </Switch>
      <ToTop />
    </>
  );
});
