/*********************************************************    
DESAFIO 1    
********************************************************/
let imagen1 = document.getElementById('imagen1')

function CHANGE() {
    console.log("presionastes el boton ");
    if (imagen1.style.border === "") {
        imagen1.style.border = "solid 2px red";
    } else {
        imagen1.style.border = "";
    }
}
/*********************************************************    
DESAFIO 2    
********************************************************/
let obj1 = document.querySelector('#obj1');
let obj2 = document.querySelector('#obj2');
let obj3 = document.querySelector('#obj3');
let result = document.querySelector('#total');

function get() {
    console.log("presionastes el boton");
    let total = (Number(obj1.value) + Number(obj2.value) + Number(obj3.value));
    result.innerHTML = "ESTAS LLEVANDO: " + total;
    if (total > 10) {
        alert('Estas llevando mas de la cantidad sugerida');
    } else if (total < 5) {
        alert('te faltan stickers');
    }
}
/*********************************************************    
DESAFIO 3   

********************************************************/
function check() {
    let pas1 = document.querySelector('#pas1').value;
    let pas2 = document.querySelector('#pas2').value;
    let pas3 = document.querySelector('#pas3').value;
    let password = Number(pas1 + pas2 + pas3);

    if (password === 911) {
        alert("¡Bienvenido usuario1, contraseña Correcta!");

    } else if (password === 714) {
        alert("¡Bienvenido usuario2, contraseña Correcta!");
    } else {
        alert("¡Password Incorrecta!");
    }
    /*limpieza de formulario*/
    document.querySelector('form').reset();
}