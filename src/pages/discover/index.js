import React, { memo } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import ToTop from "@/pages/discover/toTop";
import Recommend from "./recommend";

export default memo(function Discover() {
  return (
    <div>
      <div>
        <NavLink to={"/discover/recommend"}>推荐</NavLink>
        <NavLink to={"/discover/recommend"}>排行榜</NavLink>
        <NavLink to={"/discover/recommend"}>歌单</NavLink>
        <NavLink to={"/discover/recommend"}>歌手</NavLink>
        <NavLink to={"/discover/recommend"}>新碟上架</NavLink>
      </div>
      <Switch>
        <Route path={"/discover/recommend"} component={Recommend}></Route>
      </Switch>
      <ToTop />
    </div>
  );
});
