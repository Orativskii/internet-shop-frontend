import './App.css';
import SignUp from "./page/signUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./page/signIn";
import MainMenu from "./page/mainMenu";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/menu" element={<MainMenu/>}/>
            </Routes>
        </Router>
    );
}

export default App;
