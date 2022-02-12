import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";
const RcmdThemeHeader = memo((props) => {
    const { title, keywords } = props;
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keywords">
                    {keywords.map((item,index) => {
                        return (
                            <div className="item" key={item}>
                                <a href="todo">{item}</a>
                                {index !== keywords.length-1 ? <span className="divider">|</span> : ""}

                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="right">
              <a href="todo" className="more">更多</a>
              <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    );
});

RcmdThemeHeader.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array,
};
RcmdThemeHeader.defaultProps = {
    keywords: [],
};

export default RcmdThemeHeader;
