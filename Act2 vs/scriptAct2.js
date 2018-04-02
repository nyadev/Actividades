var aciertos = 0;
var errores = 0;
var nivel = 1;
var cantidad = 3;
var res;
var preguntas = -1;
var retardoOpciones;
var retardo;
var parte = new Array('Cabeza', 'Mano', 'Pierna', 'Pie', 'Dedos', 'Cuello', 'Pecho', 'Rodilla', 'Orejas', 'Ojos', 'Nariz');
var radioBotones = document.getElementsByName("niveles");

function Instrucciones(){  
   swal("Instrucciones",
    "Se muestra un texto con el nombre de una parte del cuerpo. El paciente deberá hacer click sobre la parte del cuerpo correspondiente sobre el dibujo del cuerpo.");
}

function parteAleatoria(){
	var aleatorio = Math.floor((Math.random()*parte.length));
	var c = parte[aleatorio];
	return c;
}

function iniciarEjercicio(){
	aciertos = 0;
	errores = 0;
	preguntas = -1;
	iniciarSecuencia();
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("comienzo").style.visibility = "hidden";
	document.getElementById("imagen").style.display = "inline";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
}

function iniciarSecuencia(){
	mostrarPalabra();
	preguntas++;
	if (preguntas == cantidad){
		document.getElementById("imagen").style.display = "none";
		document.getElementById("parte").innerHTML = "...";
		document.getElementById("resultadosBox").style.visibility = "visible";
		document.getElementById("save-results").style.display = "table";
	}
}

function mostrarPalabra(){
	res = document.getElementById("parte").innerHTML = parteAleatoria();
}

function saveResults(){
    //aquí es donde despliega los resultados
	document.getElementById("imagen").style.display = "inline";
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    document.getElementById("save-results").style.display = "none";
	errores = 0;
	aciertos = 0;
	preguntas = -1;
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
	document.getElementById("comienzo").style.visibility = "visible"; 
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
    return;
}

 function setNivel(unNivel){
	nivel = unNivel;
	document.getElementById("nivel").innerHTML = nivel;
    if(unNivel === 1){
		cantidad = 3;
    }
    if(unNivel === 2){
		cantidad = 5;
    }
    if(unNivel === 3){
		cantidad = 10;
    }
    if(unNivel === 4){
		cantidad = 15;
    }
    if(unNivel === 5){
		cantidad = 25;
    } 
 }
 
 function validarResultados(respuesta){
	if (res === respuesta){
		aciertos++;
		document.getElementById("aciertos").innerHTML = aciertos;
		iniciarSecuencia();
	} else{
		swal('Error');
		errores++;
		document.getElementById("errores").innerHTML = errores;
		iniciarSecuencia();
	}
}