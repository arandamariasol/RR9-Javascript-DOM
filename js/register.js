var valRes = document.getElementById('val-res');
valRes.style.visibility ="hidden";

function Validations1() {

    // FORM EXISTE
    var form = document.getElementsByTagName('form');

    if (form.length == 0) {
        console.log("No existe formulario");
        var newP = document.createElement('p');
        var textP = document.createTextNode('form is not found');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Existe formulario");
        var validOk = 1;
    }

    //CANTIDAD CAMPOS EXISTE
    var inputs = document.getElementsByTagName('input');

    if (inputs.length != 4) {
        console.log("Faltan campos");
        var newP = document.createElement('p');
        var textP = document.createTextNode('The number of inputs is incorrect');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Campos correctos");
        var validOk = validOk + 1;
    }

    //CAMPO REQUERIDO

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') == true) {
            console.log("Campo requerido " + inputs[i].name + " ok");
            var validOk = validOk + 1;
        } else {
            console.log("Campo requerido " + inputs[i].name + " incorrecto");
            var newP = document.createElement('p');
            var textP = document.createTextNode('The input ' + inputs[i].name + ' must be required');
            newP.appendChild(textP);
            valRes.appendChild(newP);
        }
    }

    // LABEL REQUERIDO
    var labels = document.getElementsByTagName('label');

    if (labels.length != 4) {
        console.log("Faltan etiquetas");
        var newP = document.createElement('p');
        var textP = document.createTextNode('The number of labels is incorrect');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    } else {
        console.log("Cantidad de etiquetas correctas");
        var validOk = validOk + 1;
    };

    //BOTONES
    var btnsub = document.getElementById('submit');

    if (btnsub.textContent == "Sign in") {
        console.log("Contenido botón Submit correcto");
        var validOk = validOk + 1;
    } else {
        console.log("Contenido botón Submit incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Submit button content is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    };


    if (btnsub.getAttribute('type') == "submit") {
        console.log("Tipo de botón Submit correcto");
        var validOk = validOk + 1;
    } else {
        console.log("Tipo de botón Submit incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Submit button type is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    };

    var btnres = document.getElementById('reset');

    if (btnres.textContent == "Reset") {
        console.log("Contenido botón Reset correcto");
        var validOk = validOk + 1;
    } else {
        console.log("Contenido botón Reset incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Reset button content is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    };

    if (btnres.getAttribute('type') == "reset") {
        console.log("Tipo de botón Reset correcto");
        var validOk = validOk + 1;
    } else {
        console.log("Tipo de botón Reset incorrecto");
        var newP = document.createElement('p');
        var textP = document.createTextNode('Reset button type is invalid');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    }

    if (validOk == 11) {
        var newP = document.createElement('p');
        var textP = document.createTextNode('Every validation has passed');
        newP.appendChild(textP);
        valRes.appendChild(newP);
    }

    valRes.style.visibility ="visible";
}

