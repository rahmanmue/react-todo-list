import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContainerStyles = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    height: ${props => props.height};
    min-height: ${props => props.minHeight}
`;

class Container extends React.Component{
    render(){
        const {children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, height, minHeight} = this.props;
        return(
            <ContainerStyles flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent} alignItems={alignItems} alignContent={alignContent} height={height} minHeight={minHeight}>
                {children}
            </ContainerStyles>
        );
    }

    static defaultProps = {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        height:"auto",
        minHeight:"initial"
    };
    
    static propTypes = {
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


}

export default Container;