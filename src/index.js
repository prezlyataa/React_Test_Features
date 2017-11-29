import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";

const rootElement = document.getElementById("root");


ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    rootElement
);



