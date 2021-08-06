import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import Paper from '../component/paper/Paper';
import Paper from '../component/paper/PaperClass';
// import Header from '../component/header/Header';
// import Header from '../component/header/HeaderNoJsx';
import Header from '../component/header/HeaderClass';
// import TodoForm from '../component/todoform/TodoForm';
import TodoForm from '../component/todoform/TodoFormClass';
import Todos from '../component/todos/Todos';
// import Todos from '../component/todos/TodosClass';

// layout
import Container from "../layout/Container";

// localStroge
import useStateWithLocalStroge from "../hooks/useStateWithLocalStroge";


const TodoList = () => {
    /* ingat TodoList sebagai pusat data jadi data yang di add di form melewati todolist
    dan dikirim ke Todos supaya ditampilkan.
    berarti todos menerima dan harus punya props
    */

    // todos berisi array of object
    // const [todos, setTodos] = useState(
    //     [
    //         { text: "learning react", isCompleted: false },
    //         { text: "learning js javascript", isCompleted: false }
    //     ]
    // );

    // untuk header mengatur toggle button
    const [showAdd, setShowAdd] = useState(false);

    // Menggunakan Useeffect dan Localstroge
    // const [todos, setTodos] = useState(
    //     // mengambil data di stroge dengan key todos jika tidak ada membuat array kosong
    //     JSON.parse(localStorage.getItem("todos")) || []
    // );

    // jika ada perubahan jalankan dalam todos jalankan effect
    // useEffect(()=>{
    //     // localStorage.setItem("key-nya", "value-isi harus string ngambil dari state todos diatas ")
    //     localStorage.setItem("todos", JSON.stringify(todos) )
    // },
    // // jika ada perubahan di todos jalankan use effect 
    // [todos]
    // )

    // ini dari function localStorageKey
    const [todos,setTodos] = useStateWithLocalStroge("todos");


    // membuat addtodo supaya di todoform inputan bisa masuk lalu ditambahkan ke state diatas
    const addTodo = value => {
        if (todos.length >= 10) {
            alert("sudah penuh");
            return
        } else {
            /* data yang atas / state sebelumnya diambil atau di simpan ...todos dan
       karena array of object berarti ada objek , {text : value} */
            const addedTodo = [...todos, { text: value, isCompleted:false }];
            // disimpan dan di setTodos ke atas
            setTodos(addedTodo);
        }
    }

    // function parameter kosong jika diklik seperti toggle 
    const showAddToggle = () => setShowAdd(!showAdd);


    // isCompleted untuk menggaris text
    const completeTodo = (index) => {
        // dicopy deui addtodo diatas
        const addedTodo = [...todos];
        // ambil addedTodo isCompleted nya sesuai index
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

        // console.log(addedTodo);
        setTodos(addedTodo);
    }

    // menghapus todos jika user belum pencet finsih clearTodos jangan berfungsi jika dikiri true maka jalankan setTodos
    const clearTodos = () => !showAdd && setTodos([]);


    return (
        <Paper>
            {/* flexdirection sesuai di component paper */}
            <Container flexDirection="column" justifyContent="space-between" height="100%">
            <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos} />
            {/*  
                ketika toggle header diklik maka update state showAdd lalu setelah itu
                showAdd akan dikirim ke todoform
            */}
            <TodoForm addTodo={addTodo} showAdd={showAdd} />
            <Todos todos={todos} completeTodo={completeTodo} />
            </Container>
        </Paper>
    );
}

export default TodoList;
