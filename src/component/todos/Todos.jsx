/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {jsx, useTheme} from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./todos.module.css";

// import Todo from "../todo/Todo";
import Todo from "../todo/TodoClass";

import * as styles from "./todos.styles";


// layout
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// link
import {Link} from "react-router-dom";

const Todos = ({ todos, completeTodo }) => {
    /*
    const todos = [
        { text: "Belajar React" },
        { text: "Belajar React JavaScript" },
        { text: "Belajar React Hook " },
        { text: "Belajar React Hari Ini" },
        { text: "Belajar React di Wegodev" },
        { text: "Belajar React untuk web" },
        { text: "Belajar React Props" },
        { text: "Belajar React Yuhuu" },
        { text: "Belajar React Dulu Bos" },
        { text: "Belajar React" }
    ];
    */

    // karena data dikirim dari pusat maka harus punya props todos dikirim dari pusat

    return (
        // <section className={styles.todos}>
        //     {/* && dibawah artinya mereturn */}
        //     {/* 
        //     meloop array dengan alias todo lalu ambil objek text jadi todo.text
        //     nama nya text= karena parameter props todo namanya text= 
            
        //     supaya mengilangkan error maka di todos perulangan harus ada key
        //     map selain mereturn value mereturn juga index yang bakal dijadikan key 
        //     berarti parameter selain todo ada index
        //     */
        //     }

        //     {todos.length > 0 && (
        //         todos.map((todo, index) => {
        //             return (
        //                 <Todo key={index}
        //                     text={todo.text}
        //                     completeTodo={completeTodo}
        //                     index={index}
        //                     isCompleted={todo.isCompleted} />
        //             );
        //         })
        //     )}
        //     {todos.length === 0 && (
        //         <div className={styles.todoPlaceholderText}>
        //             Add to do by clicking {" "}
        //             <span className={styles.addButtonPlaceholderText}>
        //                 Add
        //             </span>
        //             {" "}button on the top
        //         </div>
        //     )}

        // </section>


        // css in js
    //     <section css={styles.todos}>
    //     {todos.length > 0 && (
    //         todos.map((todo, index) => {
    //             return (
    //                 <Todo key={index}
    //                     text={todo.text}
    //                     completeTodo={completeTodo}
    //                     index={index}
    //                     isCompleted={todo.isCompleted} />
    //             );
    //         })
    //     )}
    //     {todos.length === 0 && (
    //         <div css={styles.todoPlaceholderText}>
    //             Add to do by clicking {" "}
    //             <span css={styles.addButtonPlaceholderText}>
    //                 Add
    //             </span>
    //             {" "}button on the top
    //         </div>
    //     )}

    // </section>

    // layout
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
                    <React.Fragment>
                        
                    <div css={styles.todoPlaceholderText}>
                        Add to do by clicking {" "}
                        <span css={styles.addButtonPlaceholderText}>
                            Add
                        </span>
                        {" "}button on the top
                    </div>

                    <Container justifyContent="center">
                        <span css={styles.seeAboutPage}>
                            <Link to="/about" >
                                Or Visit About Page
                            </Link>
                        </span>
                    </Container>


                    </React.Fragment>
                )}
            </Container>
        </section>
    );
}

// mendeklarasikan props todos
Todos.propTypes = {
    /*  karena sudah tau isi todos array of objec maka arrayof untuk array
        dan  shape untuk object yang sudah diketahui yaitu text
    */
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            // text dideklarasikan lagi sebagai string
            text: PropTypes.string,
            completeTodo: PropTypes.func.isRequired
        })
    )
}
export default Todos;