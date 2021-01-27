import {SET_TODOS} from "../ation-types";

export const setTodos = (payload) => ({
    type: SET_TODOS, payload
});

export const fetchTodos = async (dispatch) => {
    try {

        // const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
        // const data = await responce.json();
        // dispatch(setTodos(data));
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(responce => responce.json())
            .then(data => dispatch(setTodos(data)))
            .catch(err => console.error(err));

    } catch (e) {
        console.error(e);
    }
};
