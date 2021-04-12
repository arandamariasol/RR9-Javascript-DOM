var submitObject = {};
var valRes = document.getElementById('val-res');

submit.addEventListener('click', Validations2);

function Validations2 () {
    event.preventDefault();
    var lgt = Object.keys(submitObject);
    if (lgt.length == 4) {
        console.log('Pasó las validaciones nuevas');
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
        console.log(valRes);
        valRes.style.visibility ="visible";
        getUsers();

    } else {
        console.log('NO pasó las validaciones nuevas')
    }
}

async function getUsers () {
    fetch(`https://jsonplaceholder.typicode.com/users?email=${submitObject.femail}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Nombre
var fname = document.getElementById("fname");
var ename = document.getElementById("name-err");
ename.style.display = 'none';
fname.addEventListener('blur',name);

function name() {
    console.log('se ejecuto',fname.value);
    if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
        console.log('nombre valido');
        submitObject.fullName = fname.value;
        console.log(submitObject);
        return true;
    } else {
        console.log('nombre invalido')
        ename.textContent = 'Your full name must contain at least 6 characters and a space'
        ename.style.display = 'block';
        fname.style.border= '2px solid red';
        return false;
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
    console.log('se ejecuto',femail.value);
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(femail.value)){
        console.log("email valido");
        submitObject.femail = femail.value;
        console.log(submitObject);
        return true;
    } else {
        console.log("email invalido");
        efemail.textContent = 'Invalid email format'
        efemail.style.display = 'block';
        femail.style.border= '2px solid red';
        return false;
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
    console.log('se ejecuto',pass.value);
    if (pass.value.length >= 8 && /(?=\w*\d)(?=\w*[a-z])/.test(pass.value)) {
        console.log('contraseña valida');
        submitObject.Password = pass.value;
        console.log(submitObject);
        return true;
    } else {
        console.log('contraseña invalida');
        epass.textContent = 'Your password must contain at least 8 characters and it must content letters and numbers'
        epass.style.display = 'block';
        pass.style.border= '2px solid red';
        return false;
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
    console.log('se ejecuto',rpass.value);
        if (rpass.value === pass.value) {
        console.log('repetir contraseña valido');
        submitObject.repPassword = rpass.value;
        console.log(submitObject);
        return true;
    } else {
        console.log('repetir contraseña invalido');
        erpass.textContent = 'Passwords do not match'
        erpass.style.display = 'block';
        rpass.style.border= '2px solid red';
        return false;
    }
}

rpass.addEventListener('focus',rpassError);

function rpassError() {
    erpass.style.display = 'none';
    rpass.style.border= 'none';
}

