/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import {jsx, useTheme} from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";


// import styles from './paper.module.css';

import * as styles from "./paper.styles";


// {children} = curly brace yang berisi kode javascript

const Paper = ({ children }) => {
    const theme = useTheme();
    return (
        // <div className={styles.container}>
        //     <div className={styles.frame}>
        //         {children}
        //     </div>
        // </div>


        // css in js
        <div css={styles.container(theme)}>
            <div css={styles.frame(theme)}>
                {children}
            </div>
        </div>
    );
}

// jika ada parameter props maka harus didefinisikan Paper / deklarasi yang children diatas pada Paper
Paper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Paper;