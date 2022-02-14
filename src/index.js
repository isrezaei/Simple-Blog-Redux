import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {Store} from "./Store";
import {LocalStorageSetData} from "./Database/LocalStorageSetData";
import {BrowserRouter} from "react-router-dom";

//Get data and set to localstorage when started project
LocalStorageSetData()

ReactDOM.render(
    <React.StrictMode>
            <Provider store={Store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

