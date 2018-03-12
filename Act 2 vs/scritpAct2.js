function Instrucciones(){
   
   swal("Instrucciones",
    "Se muestra un texto con el nombre de una parte del cuerpo. El paciente deberá hacer click sobre la parte del cuerpo correspondiente sobre el dibujo del cuerpo.");

}
function iniciar(){
	var canvas = document.getElementById('lienzo');
	var lienzo = canvas.getContext('2d');
	
	var imagen = new Image();
	imagen.src = 'Ash.jpg';
	imagen.addEventListener('load', function(){
lienzo.drawImage(imagen,0,0)
}, false);
}
window.addEventListener('load',iniciar,false);

var aciertos = 0;
var errores = 0;
var nivel = 1;
var cantidad=3;
var res;
var preguntas=-1;
var retardoOpciones;
var retardo;

var parte = new Array('Cabeza', 'Mano', 'Pierna', 'Pie', 'Dedos', 'Cuello', 'Pecho', 'Rodilla', 'Orejas', 'Ojos', 'Nariz');

function parteAleatoria(){
	var aleatorio=Math.floor((Math.random()*parte.length));
	var c = parte[aleatorio];
	return c;
}

function iniciarEjercicio(){
	aciertos=0;
	errores=0;
	preguntas = -1;
	iniciarSecuencia();
	
	document.getElementById("aciertos").innerHTML=aciertos;
	document.getElementById("errores").innerHTML=errores;
	document.getElementById("comienzo").disabled = true;
}

function iniciarSecuencia(){
	
	mostrarPalabra();
	preguntas++;
	if (preguntas == cantidad){
		mostrarResultados();
	}

}

function mostrarPalabra(){
	res = document.getElementById("parte").innerHTML = parteAleatoria();
}

function mostrarResultados(){
	var mensaje;
	if(aciertos>errores){
		mensaje = "Buen trabajo!";
	}
	if (aciertos == errores){
		mensaje = "Puedes hacerlo mejor!";
	}
	if(aciertos < errores){
		mensaje = "Sigue practicando!";
	}
	if(aciertos > errores && errores == 0){
		mensaje = "Puntuación perfecta, felicidades!";
	}
	alert("Tuviste "+aciertos+" aciertos y " +errores+" errores. "+mensaje);
	document.getElementById("comienzo").disabled = false;
	errores = 0;
	aciertos = 0;
	preguntas = -1;
}

 function setNivel(unNivel){
     if(unNivel===1){
        nivel=unNivel;
		cantidad=3;
    }
    if(unNivel===2){
        nivel=unNivel;
		cantidad=5;
    }
    if(unNivel===3){
        nivel=unNivel;
		cantidad=10;
    }
    if(unNivel===4){
        nivel=unNivel;
		cantidad=15;
    }
    if(unNivel===5){
        nivel=unNivel;
		cantidad=25;
    }
    
 }
 
 function validarResultados(respuesta){
	 if (res == respuesta){
		 aciertos++;
		 document.getElementById("aciertos").innerHTML=aciertos;
		 iniciarSecuencia();
	 } else{
		 errores++;
		 document.getElementById("errores").innerHTML=errores;
		 iniciarSecuencia();
	 }
}
