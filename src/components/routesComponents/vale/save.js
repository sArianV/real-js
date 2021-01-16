
import React, { useState } from 'react';

import sendAsync from '../../../message-control/renderer';


function save(msj) {
    const [message, setMessage] = useState();
    const [response, setResponse] = useState();

    const code = require('../../../message-control/MessajeConst')

    function send(sql) {
        sendAsync({code:code.SAVE_PRODUCT, param:{ProductName:"easy" , SupplierId:"das4656", trademark:"465316121" }}).then((result) => setResponse(result));
    }

    return (
        
    );
}

export default save;
