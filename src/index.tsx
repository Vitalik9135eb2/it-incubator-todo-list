import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {amber, green} from "@material-ui/core/colors";
import {Provider} from "react-redux";
import {store} from "./state/store";
import AppWithRedux from "./appWithRedux/AppWithRedux";
import {createRoot} from "react-dom/client";

const theme = createTheme({
    palette: {
        primary: green,
        secondary: amber,
        type: "dark"
    }
})
const container = document.getElementById('root')

// @ts-ignore
const root = createRoot(container)

root.render(<Provider store={store}>

             <ThemeProvider theme={theme}>
                 <CssBaseline/>
                 <AppWithRedux/>
             </ThemeProvider>
         </Provider>)

