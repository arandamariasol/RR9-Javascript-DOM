var submitObject = {};
var valRes = document.getElementById('val-res');

submit.addEventListener('click', Validations2);

function Validations2 () {
    event.preventDefault();
    var lgt = Object.keys(submitObject);
    if (lgt.length == 2) {
        console.log('Pasó las validaciones de campos del formulario');
        var new1 = document.createElement('p');
        var new2 = document.createElement('p');
        var text1 = document.createTextNode('The email is ' + submitObject.email);
        var text2 = document.createTextNode('The Password is ' + submitObject.pass);
        new1.appendChild(text1);
        new2.appendChild(text2);
        valRes.appendChild(new1);
        valRes.appendChild(new2);
        valRes.style.visibility ="visible";
        putUsers();
    } else {
        console.log('NO pasó las validaciones de campos del formulario')
    }
}

async function putUsers () {
    fetch('http://localhost:4000/login', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            email: submitObject.email,
            pass:submitObject.pass,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(error){
            console.log("Error trying to send the data")
        })
}

// Email

var email = document.getElementById("email");
var eEmail = document.getElementById("email-err");
eEmail.style.display = 'none';
email.addEventListener('blur',Femail);

function Femail() {
    
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)){
        console.log("email valido");
        submitObject.email = email.value;
    } else {
        console.log("email invalido");
        eEmail.textContent = 'Invalid email format'
        eEmail.style.display = 'block';
        email.style.border= '2px solid red';
    }
}

email.addEventListener('focus',emailError);

function emailError() {
    eEmail.style.display = 'none';
    email.style.border = 'none';
}

// Contraseña

var pass = document.getElementById("pass");
var ePass = document.getElementById("pass-err");
ePass.style.display = 'none';
pass.addEventListener('blur',Pass);

function Pass() {
    
    if (pass.value.length >= 8 && /(?=\w*\d)(?=\w*[a-z])/.test(pass.value)) {
        console.log('contraseña valida');
        submitObject.pass = pass.value;
    } else {
        console.log('contraseña invalida');
        ePass.textContent = 'Your password must contain at least 8 characters and it must content letters and numbers'
        ePass.style.display = 'block';
        pass.style.border= '2px solid red';
    }
}

pass.addEventListener('focus',passError);

function passError() {
    ePass.style.display = 'none';
    pass.style.border= 'none';
}


