let e=[],t=[];function n(e){o(e.target.id.split("_")[1])}function o(t){!function(){for(let t in e)e[t].classList.add("ocultar")}(),e[t].classList.remove("ocultar"),e[t].classList.add("animate__animated","animate__fadeIn")}window.onload=function(){e.splash=document.getElementById("splash"),e.home=document.getElementById("home"),e.juego=document.getElementById("juego"),e.creditos=document.getElementById("creditos"),e.instrucciones=document.getElementById("instrucciones"),t.btn_juego=document.getElementById("btn_juego"),t.btn_creditos=document.getElementById("btn_creditos"),t.btn_instrucciones=document.getElementById("btn_instrucciones"),t.btn_juego.addEventListener("click",n),t.btn_creditos.addEventListener("click",n),t.btn_instrucciones.addEventListener("click",n),function(){let e=document.querySelectorAll(".volver");for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{o("home")})}(),setTimeout(()=>{o("home")},3e3)};
//# sourceMappingURL=index.4adeef1d.js.map
