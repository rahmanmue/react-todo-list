/** @jsxRuntime classic */
/** @jsx jsx */

// import React from "react";
import {jsx, useTheme} from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./todo.module.css";

import * as styles from "./todo.styles";

// Menerima props karena ada parameter props
const Todo = ({ text, completeTodo, index, isCompleted }) => {
    const theme = useTheme();

    return (
        // berisi data hasil inputan ketika diclik memparsing sebuah function
        // <div className={styles.todo} onClick={() => completeTodo(index)}>
        //     {/* Contoh inputan yang masuk ke props.text = Belajar React*/}
        //     <span className={styles.todoText} style={{ textDecoration: isCompleted ? "line-through" : "initial" }}>{text}</span>
        // </div>

        // css in js
         <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
            <span css={styles.todoText (theme, isCompleted)}>{text}</span>
        </div>
    );
}

// Deklarasi props yang ada di todo sebagai string/ text
Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
}

export default Todo;