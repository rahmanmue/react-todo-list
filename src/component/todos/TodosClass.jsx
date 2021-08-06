import React from "react";
import {withTheme} from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Container from "../../layout/ContainerClass";
import Todo from "../todo/TodoClass";

const StyledTodoPlaceholderText = styled.div`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    padding: 16px;
    text-align: center;
`;

const StyledAddButtonPlaceholderText = styled.span`
    font-family: "Bungee", sans-serif;
    font-size: 24px;
`;

class Todos extends React.Component{
    render(){
        const {todos, completeTodo} = this.props;
        return(
            <section className="todos-component">
            <Container flexDirection="column" minHeight="500px">
                {todos.length > 0 && (
                    todos.map((todo, index) => {
                        return (
                            <Todo key={index}
                                text={todo.text}
                                completeTodo={completeTodo}
                                index={index}
                                isCompleted={todo.isCompleted} />
                        );
                    })
                )}
                {todos.length === 0 && (
                    <StyledTodoPlaceholderText>
                        {/* mereturn dengan array */}
                        {[
                            "Add to do by clicking ",
                            <StyledAddButtonPlaceholderText>Add</StyledAddButtonPlaceholderText>,
                            " button on the top"
                        ]}
                    </StyledTodoPlaceholderText>
                )}
            </Container>
        </section>
        );
    };

    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                completeTodo: PropTypes.func.isRequired
            })
        )
    };

}

export default withTheme(Todos);