let refs = [];
let btns = [];

window.onload = init;

function init(){
    refs["splash"] = document.getElementById("splash");
    refs["home"] = document.getElementById("home");
    refs["juego"] = document.getElementById("juego");
    refs["creditos"] = document.getElementById("creditos");
    refs["instrucciones"] = document.getElementById("instrucciones");

    btns["btn_juego"] = document.getElementById("btn_juego");
    btns["btn_creditos"] = document.getElementById("btn_creditos");
    btns["btn_instrucciones"] = document.getElementById("btn_instrucciones");
    asignarEventosMenu();
    asignarVolver();
    setTimeout(()=>{
        cargarSeccion("home");
    }, 3000);
}
function asignarVolver(){
    let btns_volver = document.querySelectorAll(".volver");
    for (let i = 0; i < btns_volver.length; i++) {
        btns_volver[i].addEventListener("click", ()=>{
            cargarSeccion("home");
        });
    }
}
function asignarEventosMenu()
{
    btns["btn_juego"].addEventListener("click", cambiarSeccion);
    btns["btn_creditos"].addEventListener("click", cambiarSeccion);
    btns["btn_instrucciones"].addEventListener("click", cambiarSeccion);
}
function ocultar()
{
    for (let key in refs) {
        refs[key].classList.add("ocultar");
    }
}
function cambiarSeccion(e){ 
    let seccion = e.target.id.split("_")[1];
    cargarSeccion(seccion);
}

function cargarSeccion(seccion){
    ocultar();
    refs[seccion].classList.remove("ocultar");
}