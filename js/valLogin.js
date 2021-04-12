var submitObject = {};
var valRes = document.getElementById('val-res');

submit.addEventListener('click', Validations2);

function Validations2 () {
    event.preventDefault();
    var lgt = Object.keys(submitObject);
    if (lgt.length == 2) {
        console.log('Pasó las validaciones nuevas');
        var new1 = document.createElement('p');
        var new2 = document.createElement('p');
        var text1 = document.createTextNode('The email is ' + submitObject.femail);
        var text2 = document.createTextNode('The Password is ' + submitObject.Password);
        new1.appendChild(text1);
        new2.appendChild(text2);
        valRes.appendChild(new1);
        valRes.appendChild(new2);
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


