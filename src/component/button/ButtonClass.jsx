import React from "react";
import { withTheme } from '@emotion/react'
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    cursor: pointer;
    padding: 16px;
    background-color: unset;
    border: unset;
    outline: unset;
    color:${props => props.textColor};
    text-align: ${props => props.align};
`;  

class Button extends React.Component{
    render(){
        // Props (Mendustructor)
        // theme dijadikan props dengan withTheme
        const {text, onClick, color, align, theme} = this.props;
        const {color : {primary}} = theme;

        let textColor ;
        switch (color){
            case "hitam":
                textColor = primary.hitam;
                break;
            case "merah":
                textColor = primary.merah;
                break;
            default:
                textColor = primary.hitam;
        }

        return(
            <StyledButton onClick={onClick} align={align} textColor={textColor}>
                {text}
            </StyledButton>
        );
            
    }

    static defaultProps ={
        text:"Button",
        color:"hitam",
        align:"left"
    }
    
    
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        color: PropTypes.oneOf(["hitam, merah"]),
        align: PropTypes.oneOf(["left, right"])
    }
}

export default withTheme(Button);
