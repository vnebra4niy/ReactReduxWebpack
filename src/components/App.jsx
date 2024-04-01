import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/card";

const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/card" element={<Card />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;