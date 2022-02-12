import React, { memo, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getTopBannerAction } from "@/store/recommend/actionCreators";

import { Carousel } from "antd";
import { Bannerwrapper, BannerContent, BannerLeft, BannerRight } from "./style";
const TopBanner = function (props) {
    const { topBanners = [], getBanners } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    //const [bannerBg] = useState(topBaners);//useState 在生命周期中只在关注第一次的值(也许)
    // console.log(1);渲染了两次，一定要搞清楚什么时候会自动渲染的，怎么依赖的
    useEffect(() => {
        getBanners();
    }, [getBanners]);
    const bannerRef = useRef();
    // 业务逻辑
    /* 得到每一张轮播图的背景图 */
    // 不能这么。因为网络请求是一个异步，所以topBanners一直都没难道数据，所以这里一直是[]
    // if (bannerBg.length === 0) {
    //   console.log(topBaners);
    //     setBannerBg(
    //         topBaners.map((item) => {
    //             return item.imageUrl + "?imageView&blur=40x20";
    //         })
    //     );
    // }
    function getIndex(from,to) {
        setCurrentIndex(to);
    }
    /* 这里必须注意下，因为第一次topBanners是空的 */
    const bgUrl =
        topBanners[currentIndex] &&
        topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

    return (
        <Bannerwrapper bgUrl={bgUrl}>
            <BannerContent className="wrap-v2">
                <BannerLeft>
                    <Carousel
                        effect="fade"
                        className="swiper"
                        dots={{ className: "btn" }}
                        autoplay={true}
                        autoplaySpeed={4000}
                        ref={bannerRef}
                        beforeChange={(from,to) => {
                            getIndex(from,to);
                        }}
                    >
                        {topBanners.map((item) => {
                            return (
                                <div key={item.imageUrl}>
                                    <a href={item.url} target={"blank"}>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.typeTitle}
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </Carousel>
                    {/* ref获取节点是current 切记 */}
                </BannerLeft>
                <BannerRight
                    href="https://music.163.com/#/download"
                    target={"blank"}
                ></BannerRight>
                <div
                    className="swiper-arrow pre-arrow"
                    onClick={(e) => bannerRef.current.prev()}
                ></div>
                <div
                    className="swiper-arrow next-arrow"
                    onClick={(e) => bannerRef.current.next()}
                ></div>
            </BannerContent>
        </Bannerwrapper>
    );
};
export default memo(
    connect(
        (store) => ({
            topBanners: store.recommend.topBanners,
        }),
        (dispatch) => ({
            getBanners: () => dispatch(getTopBannerAction()),// 只要8条数据
        })
    )(TopBanner)
);
