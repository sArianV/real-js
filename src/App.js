/*import './App.css';


import Material ui


function App() {
  return (
   
    );
}

export default App;*/
import Grid from '@material-ui/core/Grid';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Router from './components/Router'
import '@fontsource/roboto';
import React, { useState } from 'react';

import sendAsync from './message-control/renderer';

import './App.css';

function App() {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    const code = require('./message-control/MessajeConst')

    function send(sql) {
        sendAsync({code:code.SAVE_PRODUCT, param:{ProductName:"easy" , SupplierId:"das4656", trademark:"465316121" }}).then((result) => setResponse(result));
    }

    return (
        /*<div className="App">
            <header className="App-header">
                <h1>
                    Standalone application with Electron, React, and
                    SQLite stack.
                </h1>
            </header>
            <article>
                <p>
                    Say <i>ping</i> to the main process.
                </p>
                <input
                    type="text"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                />
                <button type="button" onClick={() => send(message)}>
                    Send
                </button>
                <br />
                <p>Main process responses:</p>
                <br />
                <pre>
                    {(response && JSON.stringify(response, null, 2)) ||
                        'No query results yet!'}
                </pre>
            </article>
        </div>*/
        <Router/>
    );
}

export default App;
