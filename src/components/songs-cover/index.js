import React, { memo } from "react";

import { getCount } from "@/utils/format-utils";
import { SongsCoverWrapper } from "./style";
const SongsCover = memo((props) => {
    const { info } = props;
    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={info.picUrl} alt={info.name} />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom"></div>
            <div className="cover-bottom text-nowrap">{info.name}</div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCoverWrapper>
    );
});

export default SongsCover;
