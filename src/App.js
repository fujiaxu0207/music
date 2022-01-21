import React, { memo, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';

import Footer from "components/Footer";
import Header from "components/Header";
import Discover from "@/pages/discover";
import Recommend from "@/pages/discover/recommend";
import Mine from "@/pages/mine";
import Friend from "@/pages/friend";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        {/* 不能用空的路径，要不然所以都匹配 */}
        {/* <Route path={"/"} exact={true} component={Discover} ></Route> */}
        <Route path={"/discover"} component={Discover}></Route>
        <Route path={"/mine"} component={Mine}></Route>
        <Route path={"/friend"} component={Friend}></Route>
        {/* 重定向这里可以注意下 */}
        <Redirect to={"/discover/recommend"}></Redirect>
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default memo(App);
