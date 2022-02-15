import React, { memo, useEffect, useRef } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewAlbumsAction } from "@/store/recommend/actionCreators";

import RcmdThemeHeader from "@/components/rcm-theme-header";

import { Carousel } from "antd";

import { NewAlbumsWrapper } from "./style";

const NewAlbums = memo(() => {
    /* hooks是在太好用了 */
    const dispatch = useDispatch();
    const { newAlbums } = useSelector(
        (state) => ({
            newAlbums: state.recommend.newAlbums,
        }),
        shallowEqual
    );
    // console.log(newAlbums);
    const carouselRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumsAction(10));
    }, [dispatch]);
    return (
        <NewAlbumsWrapper>
            <RcmdThemeHeader title={"新碟上架"} />
            {/* {newAlbums.map((item)=>{
                return <div>{item.name}</div>
            })} */}

            <div className="album-list">
                <div
                    className="pre sprite_02"
                    onClick={(e) => {
                        carouselRef.current.prev();
                    }}
                ></div>
                <div
                    className="next sprite_02"
                    onClick={(e) => {
                        carouselRef.current.next();
                    }}
                ></div>
                <Carousel
                    className="album-list-carousel"
                    dots={false}
                    ref={carouselRef}
                >
                    <div className="page">
                        {newAlbums.slice(0, 5).map((item) => {
                            return (
                                <div className="album-item" key={item.id}>
                                    <img src={item.picUrl} alt={item.name} />
                                    <a
                                        href="todo"
                                        className="cover image_cover"
                                    >
                                        {item.name}
                                    </a>
                                    <a
                                        className="text-nowrap album-name"
                                        href="todo"
                                    >
                                        {item.name}
                                    </a>
                                    <a
                                        className="text-nowrap singer-name"
                                        href="todo"
                                    >
                                        {item.artists[0].name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div className="page">
                        {newAlbums.slice(5).map((item) => {
                            return (
                                <div className="album-item" key={item.id}>
                                    <img src={item.picUrl} alt={item.name} />
                                    <a
                                        href="todo"
                                        className="cover image_cover"
                                    >
                                        {item.name}
                                    </a>
                                    <a
                                        className="text-nowrap album-name"
                                        href="todo"
                                    >
                                        {item.name}
                                    </a>

                                    <a
                                        className="text-nowrap singer-name"
                                        href="todo"
                                    >
                                        {item.artists[0].name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </Carousel>
            </div>
        </NewAlbumsWrapper>
    );
});

export default NewAlbums;
