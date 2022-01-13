import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/test/:id" element={<Detail />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
