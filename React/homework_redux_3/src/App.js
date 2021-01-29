import './App.css';
import {Header} from "./components/header";
import {ActionButton} from "./components/action-button";
import {ActionForm} from "./components/action-form";
import {useSelector} from "react-redux";

function App() {
    const action_buttons = useSelector(({calculator: {action_buttons}}) => action_buttons);

    return (
        <div className="App">
            <Header/>
            {/*//todo взять ці діви і створити компонету*/}
            <div>
                {
                    action_buttons.map(value => <ActionButton key={'key' + value} number={value}/>)
                }
            </div>
            <ActionForm />
        </div>
    );
}

export default App;
