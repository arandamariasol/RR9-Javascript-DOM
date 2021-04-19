var submitObject = {};
var valRes = document.getElementById('val-res');

submit.addEventListener('click', Validations2);

function Validations2 () {
    event.preventDefault();
    var lgt = Object.keys(submitObject);
    if (lgt.length == 4) {
        console.log('Pasó las validaciones de campos del formulario');
        var new1 = document.createElement('p');
        var new2 = document.createElement('p');
        var new3 = document.createElement('p');
        var new4 = document.createElement('p');
        var text1 = document.createTextNode('The Full name is ' + submitObject.fullName);
        var text2 = document.createTextNode('The email is ' + submitObject.femail);
        var text3 = document.createTextNode('The Password is ' + submitObject.Password);       
        var text4 = document.createTextNode('The Confirm password is ' + submitObject.repPassword);
        new1.appendChild(text1);
        new2.appendChild(text2);
        new3.appendChild(text3);
        new4.appendChild(text4);
        valRes.appendChild(new1);
        valRes.appendChild(new2);
        valRes.appendChild(new3);
        valRes.appendChild(new4);
        valRes.style.visibility ="visible";
        postUsers();

    } else {
        console.log('NO pasó las validaciones de campos del formulario')
    }
}

async function postUsers () {
    fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            fullname: submitObject.fname,
            email: submitObject.femail,
            passw:submitObject.pass,
            rpassw:submitObject.rpass
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(error){
            console.log("Error trying to send the data")
        })
}

// Nombre
var fname = document.getElementById("fname");
var ename = document.getElementById("name-err");
ename.style.display = 'none';
fname.addEventListener('blur',name);

function name() {

    if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
        console.log('nombre valido');
        submitObject.fullName = fname.value;
    } else {
        console.log('nombre invalido')
        ename.textContent = 'Your full name must contain at least 6 characters and a space'
        ename.style.display = 'block';
        fname.style.border= '2px solid red';
    }
}

fname.addEventListener('focus',nameError);

function nameError() {
    ename.style.display = 'none';
    fname.style.border= 'none';
}

// Email

var femail = document.getElementById("email");
var efemail = document.getElementById("email-err");
efemail.style.display = 'none';
femail.addEventListener('blur',Femail);

function Femail() {
    
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(femail.value)){
        console.log("email valido");
        submitObject.femail = femail.value;
    } else {
        console.log("email invalido");
        efemail.textContent = 'Invalid email format'
        efemail.style.display = 'block';
        femail.style.border= '2px solid red';
    }
}

femail.addEventListener('focus',emailError);

function emailError() {
    efemail.style.display = 'none';
    femail.style.border = 'none';
}

// Contraseña

var pass = document.getElementById("pass");
var epass = document.getElementById("pass-err");
epass.style.display = 'none';
pass.addEventListener('blur',Pass);

function Pass() {
    
    if (pass.value.length >= 8 && /(?=\w*\d)(?=\w*[a-z])/.test(pass.value)) {
        console.log('contraseña valida');
        submitObject.Password = pass.value;
    } else {
        console.log('contraseña invalida');
        epass.textContent = 'Your password must contain at least 8 characters and it must content letters and numbers'
        epass.style.display = 'block';
        pass.style.border= '2px solid red';
    }
}

pass.addEventListener('focus',passError);

function passError() {
    epass.style.display = 'none';
    pass.style.border= 'none';
}

// Repetir contraseña

var rpass = document.getElementById("rpass");
var erpass = document.getElementById("rpass-err");
erpass.style.display = 'none';
rpass.addEventListener('blur',Rpass);

function Rpass() {
    
        if (rpass.value === pass.value) {
        console.log('repetir contraseña valido');
        submitObject.repPassword = rpass.value;
    } else {
        console.log('repetir contraseña invalido');
        erpass.textContent = 'Passwords do not match'
        erpass.style.display = 'block';
        rpass.style.border= '2px solid red';
    }
}

rpass.addEventListener('focus',rpassError);

function rpassError() {
    erpass.style.display = 'none';
    rpass.style.border= 'none';
}

