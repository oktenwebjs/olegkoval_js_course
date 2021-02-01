import './App.css';
import {Header} from "./components/header";
import {ActionButtons} from "./components/action-buttons";
import {ActionForm} from "./components/action-form";


function App() {
    return (
        <div className="App">
            <Header/>
            <ActionButtons/>
            <ActionForm/>
        </div>
    );
}

export default App;
