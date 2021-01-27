import './App.css';
import {Header} from "./components/header";
import {ActionButton} from "./components/action-button";
import {ActionForm} from "./components/action-form";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                {
                    [1, -1, 100, -100, 0].map(value => <ActionButton key={'key' + value} number={value}/>)
                }
            </div>
            <ActionForm />
        </div>
    );
}

export default App;
