/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx } from '@emotion/react'
import PropTypes from "prop-types";
// import cx from "classnames";

// import styles from "./button.module.css";

import * as styles from "./button.styles";
import { useTheme } from '@emotion/react';

const Button = ({text, onClick, color, align})=>{
    // menentukan classNames tiap button .join(" ") agar array jadi string
    // karena sudah ada library classnames maka ini tidak digunakan
    // const classNames = [
    //     "header-btn",
    //     // && artinya mereturn
    //     color === "hitam" && "warna-hitam",
    //     color === "merah" && "warna-merah",
    //     align === "left" && "align-left",
    //     align === "right" && "align-right"
    // ].join(" ");

    // implementasi library classnames
    // const classNames = cx(styles.headerBtn,{
    //      [styles.warnaHitam] : color === "hitam",
    //      [styles.warnaMerah] : color === "merah",
    //      [styles.alignLeft] : color === "left",
    //      [styles.alignRight] : color === "right"
    //     }
        
    // );
    
    const theme = useTheme();

    return(
        // <button className={classNames} onClick={onClick}>
        //     {text}
        // </button>
        <button css={styles.button({align,color, theme})} onClick={onClick}>
            {text}
        </button>
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
    // warna disimpan diarray
    color: PropTypes.oneOf(["hitam, merah"]),
    align: PropTypes.oneOf(["left, right"])
}

export default Button;