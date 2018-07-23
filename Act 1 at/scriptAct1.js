function Instrucciones(){
      swal(
   "Instrucciones",
    "Se mostrará aleatoreamente en la pantalla un cirulo negro o uno rojo durante un tiempo determinado, el paciente dará clic izquierdo cada vez que aparezca el circulo rojo",
   );
}
var aciertos = 0;
var errores = 0;
var tiempoEstimulo = 5000;
var tiempoAnimacion = '5s';
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
var radioBotones = document.getElementsByName("niveles");
var inicio = document.getElementById("comienzo");

function colorAleatorio(){
    var aleatorio = 0;		
     aleatorio = Math.floor(Math.random()*listaCirculo.length);
     return aleatorio;
}

function setNivel(unNivel){
	document.getElementById("nivel").innerHTML = unNivel;
    if(unNivel === 1){
        nivel = unNivel;
        tiempoEstimulo = 5000;
		tiempoAnimacion = '5s';
        tiempoTotal = 60000;
    }
    if(unNivel === 2){
        nivel = unNivel;
        tiempoEstimulo = 5000;
		tiempoAnimacion = '5s';
        tiempoTotal = 120000;
    }
    if(unNivel === 3){
        nivel = unNivel;
        tiempoEstimulo = 3000;
		tiempoAnimacion = '3s';
        tiempoTotal = 180000;
    }
    if(unNivel === 4){
        nivel = unNivel;
        tiempoEstimulo = 3000;
		tiempoAnimacion = '3s';
        tiempoTotal = 240000;
    }
    if(unNivel === 5){
        nivel = unNivel;
        tiempoEstimulo = 2000;
		tiempoAnimacion = '2s';
        tiempoTotal = 300000;
    }
	cantidadImagenes = tiempoTotal/(tiempoEstimulo);
	document.getElementById("img0").style.animationDuration = tiempoAnimacion;
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
	aciertos = 0;
	errores = 0;
	inicio.style.visibility = "hidden"; 
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("save-results").style.display = "none";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
	iniciaAnimacion();
	retardo = setInterval(function(){realizarEjercicio();},tiempoEstimulo);
}

function finalizarEjercicio(){
	div.style.visibility = "hidden";
	detenerAnimacion();
	document.getElementById("save-results").style.display = "table";
	clearInterval(retardo);
}

function validarRespuesta(){
	if(cantidadDeClicks === 0){
		if(idColor === 1){
			aciertos++;
			cantidadDeClicks = 1;
			document.getElementById("aciertos").innerHTML = aciertos;
		}
		else{
			swal('Error');
			errores++;
			cantidadDeClicks = 1;
			document.getElementById("errores").innerHTML = errores;
		}
	}
}

function iniciaAnimacion(){
	document.getElementById("img0").style.animationPlayState = "running";
	console.log("Animacion lista");
}

function detenerAnimacion(){
	document.getElementById("img0").style.animation = "none" ;
	document.getElementById("img0").offsetHeight;
	document.getElementById("img0").style.animation = null;
	document.getElementById("img0").style.animationPlayState = "paused";
	console.log("Animacion finalizada");
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    document.getElementById("save-results").style.display = "none";
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
	inicio.style.visibility = "visible"; 
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
    return;
}