/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'
import PropTypes from "prop-types";
import { useTheme } from '@emotion/react';

import * as styles from "./button.styles";

const Button = ({text, onClick, color, align})=>{
    const theme = useTheme();

    // return(
    //     <button css={styles.button({align,color, theme})} onClick={onClick}>
    //         {text}
    //     </button>
    // );

    return jsx(
        "button",{
            css:styles.button({align,color, theme}),
            onClick: onClick
        },
        text
    );

}

// membuat kondisi default
Button.defaultProps ={
    text:"Button",
    color:"hitam",
    align:"left"
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(["hitam, merah"]),
    align: PropTypes.oneOf(["left, right"])
}

export default Button;