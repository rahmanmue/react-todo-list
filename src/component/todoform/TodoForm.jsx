/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./todoform.module.css";

import * as styles from "./todoform.styles";

import Button from "../button/Button";


// layout
import Container from "../../layout/Container";
import Item from "../../layout/Item";



const TodoForm = ({ addTodo, showAdd }) => {
    // Hooks
    /*
        value berisi nilai dari state dan setValue berguna 
        untuk mengubah isi state  

    */
    const [value, setValue] = React.useState("");
    const theme = useTheme();

    console.log(value);

    // di form ketika di submit 
    const handleFormSubmit = e => {
        // menangkap event atau peristiwa lalu menghilangkan defaultnya
        e.preventDefault();

        if (!value) {
            alert("tidak ada yang diinput");
            return
        }

        // cek agar inputan tidak lebih dari 30 Karakter
        if (value.length > 30) {
            alert('karakter harus kurang dari 30');
            setValue("");
            return
        }


        // fungsi yang dari luar berarti ini menerima props
        addTodo(value);
        // alert(value);

        /* untuk mengosongkan kembali apabila user sudah mensubmit
            lalu deklarasikan dan isi value di input agar kosong 
        */
        setValue("");

    }


    if (showAdd) {

        return (
            // <section className={styles.add}>
            //     {/* ketika dipencet submit akan menjalankan fungsi */}
            //     <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>

            //         {
            //             /* ketika ada perubahan / onchange e menerima function yang diparsing setValue 
            //             maka setiap event men setValue dengan event target value nya 
            //             yang berarti megubah state value diatas 
            //             dan isi value={value} supaya apabila sudah disubmit di set ke awal */
            //         }

            //         <input type="text" className={styles.addInput} value={value} onChange={e => setValue(e.target.value)} />
            //         <button type="submit" className={styles.addButton}>Add</button>

            //     </form>
            // </section>

            // css in js
            // <section css={styles.add}>
            //     <form action="" css={styles.addForm} onSubmit={handleFormSubmit}>
            //         <input type="text" css={styles.addInput(theme)} value={value} onChange={e => setValue(e.target.value)} />
            //         <button type="submit" css={styles.addButton(theme)}>Add</button>
            //     </form>
            // </section>

            // layout
            <section className="todoform-component">
                <form action=""onSubmit={handleFormSubmit}>
                    <Container alignItems="center">
                        <Item flex={1} padding="0 0 0 16px">
                            <input type="text" css={styles.addInput(theme)} value={value} onChange={e => setValue(e.target.value)} />
                        </Item>
                        <Item>
                            {/* <button type="submit" css={styles.addButton(theme)}>Add</button> */}
                            <Button text="Add"/>
                        </Item>
                    </Container>
                </form>
            </section>
        );
    } else {
        return null;
    }


}

// Deklarasikan prop-types yang functio dari pusat TodoList
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    // showAdd tipenya boolean
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm;