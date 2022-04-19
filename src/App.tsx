import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";
import NewProduct from "./routes/new-product";
import {store} from "./store/store";
import {Provider} from "react-redux";
import MainLayout from "./components/layout/MainLayout";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="detail/:productId" element={<Detail/>}/>
                            <Route path="new-product" element={<NewProduct/>}/>

                            <Route
                                path="*"
                                element={
                                    <main style={{padding: "1rem"}}>
                                        <p>There's nothing here!</p>
                                    </main>
                                }
                            />
                        </Routes>
                    </MainLayout>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
