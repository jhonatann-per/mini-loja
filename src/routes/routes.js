import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "../pages/Home";

const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
    
}

export default Rotas;