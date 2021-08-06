/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, height, minHeight}) => {
    const containerStyles = css`
        display: flex;
        flex-direction: ${flexDirection};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
        height: ${height};
        min-height: ${minHeight}
    `;

    return(
        <div className="flex-container" css={containerStyles}>
            {children}
        </div>
    );
};

Container.defaultProps = {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    height:"auto",
    minHeight:"initial"
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flexDirection: PropTypes.oneOf([
        "row","row-reverse","column","column-reverse"
    ]),
    flexWrap: PropTypes.oneOf([
        "wrap","nowrap","wrap-reverse"
    ]),
    justifyContent : PropTypes.oneOf([
        "flex-start","flex-end","center","space-between"
    ]),
    alignItems : PropTypes.oneOf([
        "strecth","flex-start","flex-end","baseline","center"
    ]),
    alignContent : PropTypes.oneOf([
        "strecth","flex-start","flex-end","baseline","center","space-around",
        "space-between","space-evenly","start","end","first baseline", "last baseline" 
    ]),
    height : PropTypes.oneOf([PropTypes.string , PropTypes.number]),
    minHeight: PropTypes.string
};

export default Container;