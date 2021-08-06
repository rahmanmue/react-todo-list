import React from "react";
import {withTheme} from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";
import Button from "../button/ButtonClass";

const StyledH1= styled.h1`
    text-align: center;
    font-family: "Homemade Apple", sans-serif;
    font-size: 3.2rem;
    text-transform: lowercase;
    color: ${props => props.theme.color.primary.hitam}
    `;


class Header extends React.Component{
    render(){
        const {showAddToggle, showAdd, clearTodos, theme} = this.props;
        return(
            <section className="header-component">
            <Container alignItems="flex-start"> 
                <Item flex={1}>
                    <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} color={"hitam"} align={"left"}/>
                </Item>
                <Item flex={2} >
                    <StyledH1 theme={theme}>
                        Todo List
                    </StyledH1>
                </Item>
                <Item flex={1} align="right">
                    <Button text={"clear"} onClick={clearTodos} color={"merah"} align={"right"} />
                </Item>
            </Container>
        </section>
        );
    };

    static propTypes = {
        showAddToggle: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired,
        clearTodos: PropTypes.func.isRequired
    }; 
} 

export default withTheme(Header);