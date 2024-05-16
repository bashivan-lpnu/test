import './styles/App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Events from "./Pages/Events";
import Participants from "./Pages/Participants";
import Registration from "./Pages/Registration";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/participants/:id/:title" element={<Participants />} />
                <Route path="/registration/:id/:title" element={<Registration />} />
                <Route path="*" element={<Events />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;