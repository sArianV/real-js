
import React, { useState } from 'react';

import sendAsync from '../../../message-control/renderer';


function save(msj) {
    const [message, setMessage] = useState();
    const [response, setResponse] = useState();

    const code = require('../../../message-control/MessajeConst')

    function send(obj) {
        sendAsync({code:code.SAVE_PRODUCT, param:{ProductName:obj.name , SupplierId:obj.supplierId }}).then((result) => setResponse(result));
    }

    return (
        
    );
}

export default save;
