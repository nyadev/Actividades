function Instrucciones(){
      swal(
   "Instrucciones",
    "Se mostrará aleatoreamente en la pantalla un círulo negro o uno rojo durante un tiempo determinado, el paciente dará clic izquierdo cada vez que aparezca el círculo rojo",
   );
}
var aciertos = 0;
var errores = 0;
var tiempoEstimulo = 5000;
var tiempoTotal = 60000;
var nivel = 1;
var listaCirculo = ['circuloNegro.png','CirculoRojo.png'];
var idColor = 0;
var cantidadDeClicks = 0;
var div = document.getElementById("div0");
var imagen = document.getElementById("img0");
var retardo;
var retardo2;
var numEjercicio = 0;
var cantidadImagenes = tiempoTotal/(tiempoEstimulo);

function colorAleatorio(){
    var aleatorio = 0;		
     aleatorio = Math.floor(Math.random()*listaCirculo.length);
     return aleatorio;
}

function setNivel(unNivel){
     if(unNivel === 1){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
    }
    if(unNivel === 2){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 120000;
    }
    if(unNivel === 3){
        nivel = unNivel;
        tiempoEstimulo = 3000;
        tiempoTotal = 180000;
    }
    if(unNivel === 4){
        nivel = unNivel;
        tiempoEstimulo = 2000;
        tiempoTotal = 240000;
    }
    if(unNivel === 5){
        nivel = unNivel;
        tiempoEstimulo = 2000;
        tiempoTotal = 300000;
    }
	cantidadImagenes = tiempoTotal/(tiempoEstimulo);
}

function cambiarImagen(posicionimg){
	imagen.src = listaCirculo[posicionimg];
}

function realizarEjercicio(){
	if(numEjercicio < cantidadImagenes){
		div.style.visibility = "visible";
		numEjercicio++;
		cantidadDeClicks = 0;
		idColor = colorAleatorio();
		cambiarImagen(idColor);
	}else{
		finalizarEjercicio();
	}
	
}


function iniciarEjercicio(){
	numEjercicio = 0;
	retardo = setInterval(function(){realizarEjercicio();},tiempoEstimulo);
	
}

function finalizarEjercicio(){
	div.style.visibility = "hidden";
}

function validarRespuesta(){
	if(cantidadDeClicks === 0){
		if(idColor === 1){
			aciertos++;
			cantidadDeClicks = 1;
			document.getElementById("aciertos").innerHTML = aciertos;
		}
		else{
			errores++;
			cantidadDeClicks = 1;
			document.getElementById("errores").innerHTML = errores;
		}
	}
}