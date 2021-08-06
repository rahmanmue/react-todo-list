import React from "react";
import {withTheme} from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";
import Button from "../button/Button";

const StyledInput = styled.input`
    background: unset;
    width:100%;
    border: unset;
    padding: 0 64px;
    border-bottom: 1px solid ${props => props.theme.color.primary.merah};
    outline: unset;
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
`;

class TodoForm extends React.Component{
    // untuk state
    state = {
        value : ""
    }

    // method
    handleFormSubmit = e => {
        // mendustructor/ mendaftarkan agar lebih pendek
        // this.state.value menjadi
        const { value } = this.state;
        // props addTodo dipake disini
        const {addTodo} = this.props;
        e.preventDefault();

        if (!value) {
            alert("tidak ada yang diinput");
            return
        }

        // cek agar inputan tidak lebih dari 30 Karakter
        if (value.length > 30) {
            alert('karakter harus kurang dari 30');

            // menset state
            this.setState({
                value:""
            });
            return
        }


        // fungsi yang dari luar berarti ini menerima props
        addTodo(value);
    
        this.setState({
            value:""
        });

    }

    // menghandle perubahan
    handleOnChange = e =>{
        this.setState({
            value : e.target.value
        })
    }


    render(){
        const {showAdd, theme} = this.props;

        if (showAdd){  
            return(
                <section className="todoform-component">
                    <form onSubmit={this.handleFormSubmit}>
                        <Container alignItems="center">
                            <Item flex={1} padding="0 0 0 16px">  
                                <StyledInput 
                                    type="text"
                                    theme={theme}
                                    value={this.state.value}
                                    onChange={this.handleOnChange}>

                                    </StyledInput>
                            </Item>
                            <Item>
                                <Button text="Add"/>
                            </Item>
                        </Container>
                    </form>
                </section>
            );
        }else{
            return null;
        }
    };

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired
    }
    

}

export default withTheme(TodoForm);