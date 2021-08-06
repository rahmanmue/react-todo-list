/** @jsxRuntime classic */
/** @jsx jsx */

// import React from "react";
import {jsx,css} from "@emotion/react";
import PropTypes from "prop-types";
// import Button from "../button/Button";
// import Button from "../button/ButtonNoJsx";
import Button from "../button/ButtonClass";

// layout
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// style awal
// import cx from "classnames";
// import styles from "./header.module.css";

import * as styles from "./header.styles";
import { useTheme } from "@emotion/react";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
    const theme = useTheme();

    return (
        // styles module css
        // <section className={styles.header}>
            
        //     {/* Diubah jadi Component 
        //     <button className="header-btn warna-hitam" onClick={showAddToggle}>
        //         {showAdd ? 'Finish' : 'Add'}
        //     </button> 
        //     */}
        //     <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} color={"hitam"} align={"left"}/>

        //     <h1 className={styles.headerTitle}>Todo List</h1>
        //     {/* <button className="header-btn warna-merah" onClick={clearTodos}>Clear</button> */}
        //     <Button text={"clear"} onClick={clearTodos} color={"merah"} align={"right"} />

        // </section>

        // style css in js
        // <section css={styles.header}>
    
        //     <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} color={"hitam"} align={"left"}/>
        //     <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        //     <Button text={"clear"} onClick={clearTodos} color={"merah"} align={"right"} />

        // </section>

        // style layout 
        <section className="header-component">
            <Container alignItems="flex-start"> 
                <Item flex={1}>
                    <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} color={"hitam"} align={"left"}/>
                </Item>
                <Item flex={2} >
                    <h1 css={styles.headerTitle(theme)}>Todo List</h1>
                </Item>
                <Item flex={1} align="right">
                    <Button text={"clear"} onClick={clearTodos} color={"merah"} align={"right"} />
                </Item>
            </Container>
        </section>


    );
};

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
};

export default Header;