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
var eFname = document.getElementById("name-err");
eFname.style.display = 'none';
fname.addEventListener('blur',Fullname);

function Fullname() {

    if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
        console.log('nombre valido');
        submitObject.fname = fname.value;
    } else {
        console.log('nombre invalido')
        eFname.textContent = 'Your full name must contain at least 6 characters and a space'
        eFname.style.display = 'block';
        fname.style.border= '2px solid red';
    }
}

fname.addEventListener('focus',nameError);

function nameError() {
    eFname.style.display = 'none';
    fname.style.border= 'none';
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

// Repetir contraseña

var rpass = document.getElementById("rpass");
var eRpass = document.getElementById("rpass-err");
eRpass.style.display = 'none';
rpass.addEventListener('blur',Rpass);

function Rpass() {
    
        if (rpass.value === pass.value) {
        console.log('repetir contraseña valido');
        submitObject.rpass = rpass.value;
    } else {
        console.log('repetir contraseña invalido');
        eRpass.textContent = 'Passwords do not match'
        eRpass.style.display = 'block';
        rpass.style.border= '2px solid red';
    }
}

rpass.addEventListener('focus',rpassError);

function rpassError() {
    eRpass.style.display = 'none';
    rpass.style.border= 'none';
}

