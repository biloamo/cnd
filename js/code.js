
const main = document.querySelector("#main");

main.innerHTML = `

<video  controls='controls' controlsList='nodownload' id='play-video' poster='auto' src='' style='position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; '>




`

const opciones = {
     method :'POST'
    };
    
    fetch('https://su.biloa.fun/conect/mostrar.php',opciones)
    .then(respuesta => respuesta.json())
    .then(resultado =>{
  
 resultado.forEach(element => {
  		let url_vlr = new URL('https://biloa.fun' + element.linkOriginal);
        let params = url_vlr.searchParams;
        let id = params.get('id');
   
    if(v === element.id){
     
		let json = atob(id);
        document.getElementById("play-video").src = json;


    };
 });   
});

const mo_web = window.matchMedia("(pointer: fine) and (hover: hover)").matches;

const mo_movil = window.matchMedia("(pointer: coarse)").matches;

if (mo_web) {
    document.addEventListener("click", ()=>{
     cli()
    }, { once: true })
  
} else if (mo_movil) {
 
  document.addEventListener("touchstart", () => {
    inic()
   }, { once: true });
};

function cli() {
    
let contadorr = 0;
 document.addEventListener("click", manejarEvent);
function manejarEvent() {
    contadorr++;
     window.location.href = "https://pleasurecommitment.com/jxt1ee1r?key=9be5574a804d77b27ac22a528af8bc96"
    if (contadorr === 3) {
        
       document.removeEventListener("click", manejarEvent);
        
    };
};
};


var control = 3;

function times() {

	if(control == 0) {
    inic()
	}else{
		control--;
	 setTimeout("times()",1000);
	};
};


function inic() {
document.addEventListener("touchstart",  manejarEvento);
window.location.href = "https://pleasurecommitment.com/jxt1ee1r?key=9be5574a804d77b27ac22a528af8bc96"
let contador = 0;
function manejarEvento() {
    contador++;
    window.location.href = "https://pleasurecommitment.com/jxt1ee1r?key=9be5574a804d77b27ac22a528af8bc96"
    if (contador === 4) {
        
       document.removeEventListener("touchstart", manejarEvento);
        
    };
};

};
