import React from "react";
import {withTheme} from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledTodo = styled.div`
    position: relative;
    max-height: 34px;
    margin: 16px 0 0;
    min-height: 34px;
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.color.primary.merah};
    flex: 1 0 auto;
`;

const StyledTodoText = styled.span`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: ${props=> props.theme.color.primary.hitam};
    text-decoration: ${props => props.isCompleted ? "line-through" : "initial"}
`;

class Todo extends React.Component{
    render(){
        const {text, completeTodo, index, isCompleted, theme} = this.props;
        return(
            <StyledTodo theme = {theme} onClick={() => completeTodo(index)}>
                <StyledTodoText theme= {theme} isCompleted={isCompleted}>
                    {text}
                </StyledTodoText>
            </StyledTodo>
        );
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        completeTodo: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }
}

export default withTheme(Todo);