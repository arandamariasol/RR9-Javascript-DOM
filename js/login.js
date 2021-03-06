var valRes = document.getElementById('val-res');
valRes.style.padding = "2%";
valRes.style.border = "2px solid red";
valRes.style.visibility ="hidden";
var validOk = 0;

submit.addEventListener('click', Validations1);

function valForm () {
    var form = document.getElementsByTagName('form');

    if (form.length == 0) {
        console.log("No existe formulario");
        var newP = document.createElement('p');
        var textP = document.createTextNode('form is not found');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Existe formulario");
        validOk = 1;
    }
}
  
function valInputsEx () {
    var inputs = document.getElementsByTagName('input');

    if (inputs.length != 2) {
        console.log("Faltan campos");
        var newP = document.createElement('p');
        var textP = document.createTextNode('The number of inputs is incorrect');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Campos correctos");
        validOk = validOk + 1;
    }
}

function valInputsReq () {
    var inputs = document.getElementsByTagName('input');
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') == true) {
            console.log("Campo requerido " + inputs[i].name + " ok");
            validOk = validOk + 1;
        } else {
            console.log("Campo requerido " + inputs[i].name + " incorrecto");
            var newP = document.createElement('p');
            var textP = document.createTextNode('The input ' + inputs[i].name + ' must be required');
            newP.appendChild(textP);
            valRes.appendChild(newP);            
        }
    }
};
    
function valLabels () {
    var labels = document.getElementsByTagName('label');

    if (labels.length != 2) {
        console.log("Faltan etiquetas");
        var newP = document.createElement('p');
        var textP = document.createTextNode('The number of labels is incorrect');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Cantidad de etiquetas correctas");
        validOk = validOk + 1;
    };
}

function valSubmit () {
    var btnsub = document.getElementById('submit');

    if (btnsub.textContent == "Log in") {
        console.log("Contenido bot??n Login correcto");
        validOk = validOk + 1;
    } else {
        console.log("Contenido bot??n Login incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Login button content is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    };
  
    if (btnsub.getAttribute('type') == "submit") {
        console.log("Tipo de bot??n Submit correcto");
        validOk = validOk + 1;
    } else {
        console.log("Tipo de bot??n Submit incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Submit button type is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    };
}
    
function valAnchor () {
    var anchor = document.getElementById('hrefok');
    var hrefOk = anchor.getAttribute('href');
    if (hrefOk == "register.html") {
        console.log("Href asociado a anchor correcto");
        validOk = validOk + 1;
    } else {
        console.log("Href asociado a anchor incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('The href associated with the anchor is incorrect');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    }
}

function Validations1() {
    valForm();
    valInputsEx();
    valInputsReq();      
    valLabels();
    valSubmit();
    valAnchor();
    if (validOk == 8) {
        var newP = document.createElement('p');
        var textP = document.createTextNode('Every form structure validation has passed');
        newP.appendChild(textP);
        valRes.appendChild(newP);
        valRes.style.border = "2px solid blue";
    }
    valRes.style.visibility ="visible";
}