import {css} from "@emotion/react";

export const button = ({color,align, theme}) => {

    let textColor ;

    const {
        color : { primary }
    } = theme;

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
    


    // width: 24%;
    return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    cursor: pointer;
    padding: 16px;
    background-color: unset;
    border: unset;
    outline: unset;
    color:${textColor};
    text-align: ${align};
    `;

}