import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {amber, green} from "@material-ui/core/colors";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

const theme = createTheme({
    palette: {
        primary: green,
        secondary: amber,
        type: "dark"
    }
})

ReactDOM.render(
    <Provider store={store}>

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppWithRedux/>
        </ThemeProvider>
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
