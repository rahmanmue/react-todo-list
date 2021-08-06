import React from "react";

import Paper from '../component/paper/PaperClass';
import Header from '../component/header/HeaderClass';
import TodoForm from '../component/todoform/TodoFormClass';
import Todos from '../component/todos/TodosClass';

// layout
// import Container from "../layout/Container";
import Container from "../layout/ContainerClass";

class TodoList extends React.Component{
    state = {
        todos : [],
        showAdd : false
    }


    // hooks di class
    // dibaca dulu 
    componentDidMount(){
        const todosStateLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];

        const showAddStateLocalStorage = JSON.parse(localStorage.getItem("showAdd")) || false;

        this.setState({
            todos: todosStateLocalStorage,
            showAdd : showAddStateLocalStorage
        });
    }

    // diupdate
    componentDidUpdate(){
        const {todos, showAdd} = this.state;
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("showAdd", JSON.stringify(showAdd));
    }


    addTodo = value =>{
        const {todos} = this.state;
        if (todos.length >= 10) {
            return alert("sudah penuh");   
        } else {
            const addedTodo = [...todos, { text: value, isCompleted: false }];
            this.setState({
                todos: addedTodo
            })
        }
    }

    completeTodo = (index) =>{
        const {todos} = this.state;

        const addedTodo = [...todos];

        // ganti iscompleted jika diklik
        addedTodo[index].isCompleted= !addedTodo[index].isCompleted;

        this.setState({
            todos: addedTodo
        });
    }

    clearTodos = () =>{
        const {showAdd} = this.state;
        if(showAdd){
            return alert("Finish dulu sebelum diclear");
        }

        this.setState({
            todos:[]
        });
    }


    showAddToggle = () =>{
      
        // this.setState({
        //     showAdd: !showAdd
        // })

        this.setState(
            // callback fungsi
            prevState => ({
                showAdd : !prevState.showAdd
            })
        )
    }
    

    render(){
        const {todos, showAdd} = this.state;
        return(
            <Paper>
                <Container flexDirection="column" justifyContent="space-between" height="100%">
                    <Header showAddToggle={this.showAddToggle} showAdd={showAdd} clearTodos={this.clearTodos} />
                    <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
                    <Todos todos={todos} completeTodo={this.completeTodo} />
                </Container>
            </Paper>
        );
    };
}


export default TodoList;
