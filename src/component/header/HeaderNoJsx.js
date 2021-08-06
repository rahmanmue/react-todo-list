/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx,css} from "@emotion/react";
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJsx";

// layout
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./header.styles";
import { useTheme } from "@emotion/react";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
    const theme = useTheme();

    //return (
        // style layout 
        // <section className="header-component">
        //     <Container alignItems="flex-start"> 
        //         <Item flex={1}>
        //             <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} color={"hitam"} align={"left"}/>
        //         </Item>
        //         <Item flex={2} >
        //             <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        //         </Item>
        //         <Item flex={1} align="right">
        //             <Button text={"clear"} onClick={clearTodos} color={"merah"} align={"right"} />
        //         </Item>
        //     </Container>
        // </section>
    //);

    return jsx(
        "section",{
            className:"header-component"
        },
        jsx(
            Container,{
                alignItems:"flex-start"
            },
            jsx(
                Item,{
                    flex: 1
                },
                jsx(
                    Button,{
                        text: showAdd ? "Finish" : "Add",
                        onClick: showAddToggle,
                        color:"hitam",
                        align:"left"
                    }
                )
            ),
            jsx(
                Item,{
                    flex:2,
                },
                jsx(
                    "h1",{
                        css: styles.headerTitle(theme)
                    },
                    "Todo List"
                )
            ),
            jsx(
                Item,{
                    flex:1,
                    align:"right"
                },
                jsx(
                    Button,{
                        text: "clear",
                        onClick:clearTodos,
                        color:"merah",
                        align:"right"
                    }
                )
            )
        )
    );
};

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
};

export default Header;