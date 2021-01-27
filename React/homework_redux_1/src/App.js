import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {incCounter, resetCounter, decCounter, fetchTodos} from "./redux";

import './App.css';

function App() {
    const {todos, counter} = useSelector(({counter: {counter}, todos: {todos}}) => ({todos, counter}));
    const dispatch = useDispatch();
    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleReset = () => dispatch(resetCounter());

    useEffect(() => {
        fetchTodos(dispatch);
    });

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2>Counter value: {counter}</h2>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleReset}>Reset</button>

            <h2>Todos:</h2>
            {todos.map(todo => (
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            ))}
        </div>
    );
}

export default App;
