/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function converter() {
    let numero = document.getElementById('numero').value;
    let converterDe = document.getElementById('converter-de').value;
    let converterPara = document.getElementById('converter-para').value
    
    let numeroMetro = numero;
    let numeroConvertido = 0;

    if(converterDe == 'Milimetro' ){
        numeroMetro = numero / 1000;
    }
    else if(converterDe == 'Centimetro'){
        numeroMetro = numero / 100;
    }
    else if(converterDe == 'Quilometro'){
        numeroMetro = numero * 1000;
    }

    if(converterPara == 'Milimetro' ){
        numeroConvertido = numeroMetro * 1000;
    }
    else if(converterPara == 'Centimetro'){
        numeroConvertido = numeroMetro * 100;
    }
    else if(converterPara == 'Quilometro'){
        numeroConvertido = numeroMetro / 1000;
    }
    else if(converterPara == 'Metro'){
        numeroConvertido = numeroMetro;
    }
    
    
    document.getElementById("resultado").setAttribute('value', numeroConvertido);
}

function retornarRazao(tipoConversao){
    if(tipoConversao == 'Milimetro'){
        return Math.pow(10, -3);
    }
    else if(tipoConversao == 'Centimetro'){
        return Math.pow(10, -2)
    }
    else if(tipoConversao == 'Quilometro'){
        return Math.pow(10, 3)
    }

    return 1;
}