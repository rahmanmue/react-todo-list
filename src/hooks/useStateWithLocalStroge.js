import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStroge = localStorageKey =>{
    const [todos, setTodos] = React.useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    if (!localStorageKey){
        throw new Error ("parameter localStrogeKey tidak ada");
    }

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos));},[todos,localStorageKey]
    );

    return [todos, setTodos];
}

useStateWithLocalStroge.propTypes = {
    localStorageKey: PropTypes.string.isRequired
}

export default useStateWithLocalStroge;