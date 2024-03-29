import * as React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { store } from "./redux/store";
import {Provider} from 'react-redux';


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);
}
