function Instrucciones(){
   swal("Instrucciones",
    "Aparecerán círculos que se iluminarán, el niño deberá seleccionar el que corresponde en el cuadro derecho.");
}
var nivel = 1;
var fase = 1;
var aciertos = 0;
var errores = 0;
var cantidad = 6;
var elementos = 2;
var respuestaCorrecta;
var arrayRespuestasCorrectas = [];
var colorCirculo = 1;
var divsSeleccionados;
var imagenesCirculo = new Array('circulo1.png', 'circulo2.png', 'circulo3.png', 'circulo4.png', 'circulo5.png', 'circulo6.png', 'circulo7.png');
var listaPosiciones = new Array(2, 3);
var listaPosiciones2 = new Array(0, 1);
var ejercicioARealizar = 0;
var numeroRespuesta = 0;

var divsMuestra = [document.getElementById("div1"), document.getElementById("div2"), document.getElementById("div3"), document.getElementById("div4"), 
document.getElementById("div5"), document.getElementById("div6"), document.getElementById("div7"), document.getElementById("div8"), 
document.getElementById("div9"), document.getElementById("div10"), document.getElementById("div11"), document.getElementById("div12"), 
document.getElementById("div13"), document.getElementById("div14"), document.getElementById("div15"), document.getElementById("div16"),
document.getElementById("div17"), document.getElementById("div18"), document.getElementById("div19"), document.getElementById("div20"), 
document.getElementById("div21"), document.getElementById("div22"), document.getElementById("div23"), document.getElementById("div24")];
 
var divsSolucion = [document.getElementById("div1a"), document.getElementById("div2a"), document.getElementById("div3a"), document.getElementById("div4a"), 
document.getElementById("div5a"), document.getElementById("div6a"), document.getElementById("div7a"), document.getElementById("div8a"), 
document.getElementById("div9a"), document.getElementById("div10a"), document.getElementById("div11a"), document.getElementById("div12a"), 
document.getElementById("div13a"), document.getElementById("div14a"), document.getElementById("div15a"), document.getElementById("div16a"), 
document.getElementById("div17a"), document.getElementById("div18a"), document.getElementById("div19a"), document.getElementById("div20a"), 
document.getElementById("div21a"), document.getElementById("div22a"), document.getElementById("div23a"), document.getElementById("div24a")];

var imagenesMuestra = [document.getElementById("imagen1"), document.getElementById("imagen2"), document.getElementById("imagen3"), document.getElementById("imagen4"), 
document.getElementById("imagen5"), document.getElementById("imagen6"), document.getElementById("imagen7"), document.getElementById("imagen8"), 
document.getElementById("imagen9"), document.getElementById("imagen10"), document.getElementById("imagen11"), document.getElementById("imagen12"), 
document.getElementById("imagen13"), document.getElementById("imagen14"), document.getElementById("imagen15"), document.getElementById("imagen16"), 
document.getElementById("imagen17"), document.getElementById("imagen18"), document.getElementById("imagen19"), document.getElementById("imagen20"), 
document.getElementById("imagen21"), document.getElementById("imagen22"), document.getElementById("imagen23"), document.getElementById("imagen24")];

var imagenesSolucion = [document.getElementById("imagen1a"), document.getElementById("imagen2a"), document.getElementById("imagen3a"), document.getElementById("imagen4a"), 
document.getElementById("imagen5a"), document.getElementById("imagen6a"), document.getElementById("imagen7a"), document.getElementById("imagen8a"), 
document.getElementById("imagen9a"), document.getElementById("imagen10a"), document.getElementById("imagen11a"), document.getElementById("imagen12a"), 
document.getElementById("imagen13a"), document.getElementById("imagen14a"), document.getElementById("imagen15a"), document.getElementById("imagen16a"), 
document.getElementById("imagen17a"), document.getElementById("imagen18a"), document.getElementById("imagen19a"), document.getElementById("imagen20a"), 
document.getElementById("imagen21a"), document.getElementById("imagen22a"), document.getElementById("imagen23a"), document.getElementById("imagen24a")];

var ejecutarEjercicio1 = function (){
	var indexPosicionCorrecta = posicionAleatoria(listaPosiciones);
	var posicionCorrecta = listaPosiciones[indexPosicionCorrecta];
	respuestaCorrecta = listaPosiciones2[indexPosicionCorrecta];
	cambiarColor(imagenesMuestra, posicionCorrecta);
};

var ejecutarEjercicio2 = function (){
	var indexPosicionCorrecta;
	var pasar = 0;
	var valorCorrecto = 0;
	var posicionCorrecta;
	if(arrayRespuestasCorrectas.length > 0){
		valorCorrecto = 100;
		do{
			contador = 0;
			valorTemporal = posicionAleatoria(listaPosiciones);
			for(i = 0; i < arrayRespuestasCorrectas.length; i++){
				if(nivel === 3){
					if(listaPosiciones[valorTemporal] === arrayRespuestasCorrectas[i]){
						contador++;
						listaPosiciones.splice(valorTemporal,1);
						listaPosiciones2.splice(valorTemporal,1);
					}
				}else{
					if(listaPosiciones[valorTemporal] === arrayRespuestasCorrectas[i]+1){
						contador++;
						listaPosiciones.splice(valorTemporal,1);
						listaPosiciones2.splice(valorTemporal,1);
					}
				}			
			}
			
			if(contador === 0){
				valorCorrecto = valorTemporal;
			} else{
				if(listaPosiciones.length > 0){			
				}
				else{
					if(nivel === 3){
						cambiarListaPosiciones(13);
					}
				}
			}
		}
		while(valorCorrecto === 100);
	}
	else{
		valorCorrecto = posicionAleatoria(listaPosiciones);	
	}
	if(nivel === 3){
		indexPosicionCorrecta = valorCorrecto;
		posicionCorrecta = listaPosiciones[indexPosicionCorrecta];
		arrayRespuestasCorrectas.push(listaPosiciones[indexPosicionCorrecta]);
		cambiarColor(imagenesMuestra, posicionCorrecta);
		cambiarListaPosiciones(listaPosiciones[indexPosicionCorrecta]);
	}else{
		indexPosicionCorrecta = valorCorrecto;
		posicionCorrecta = listaPosiciones[indexPosicionCorrecta];
		arrayRespuestasCorrectas.push(listaPosiciones2[indexPosicionCorrecta]);
		cambiarListaPosiciones(listaPosiciones[indexPosicionCorrecta]-1);
		cambiarColor(imagenesMuestra, posicionCorrecta);
	}
};

var ejecutarEjercicio3 = function (){
	var indexPosicionCorrecta;
	var valorTemporal;
	var posicionCorrecta;
	var valorCorrecto = 100;
	var contador = 0;
	llenarArrayRespuestasCorrectas();
	if(nivel === 2){
		colorCirculo = 1;
	}
};

var ejercicios = [ejecutarEjercicio1, ejecutarEjercicio2, ejecutarEjercicio3];	

function setFase(unaFase){
	fase = unaFase;
}

function llenarArrayRespuestasCorrectas(){
		for(j = 0; j < cantidad; j++){
		if(arrayRespuestasCorrectas.length > 0){
			valorCorrecto = 100;
			do{
				contador = 0;
				valorTemporal = posicionAleatoria(listaPosiciones);
				for(i = 0; i < arrayRespuestasCorrectas.length; i++){
					if(nivel === 3){
						if(listaPosiciones[valorTemporal] === arrayRespuestasCorrectas[i]){
							contador++;
							listaPosiciones.splice(valorTemporal,1);
							listaPosiciones2.splice(valorTemporal,1);
						}
					}else{
						if(listaPosiciones[valorTemporal] === arrayRespuestasCorrectas[i]+1){
							contador++;
							listaPosiciones.splice(valorTemporal,1);
							listaPosiciones2.splice(valorTemporal,1);
						}
					}
					
				}
				if(listaPosiciones.length > 0){			
				}
				else{
					if(nivel === 3){
						cambiarListaPosiciones(13);
					}
				}
				if(contador === 0){
					valorCorrecto = valorTemporal;
				}
			}
			while(valorCorrecto === 100);
			indexPosicionCorrecta = valorCorrecto;
		}else{
			indexPosicionCorrecta = posicionAleatoria(listaPosiciones);	
		}
		posicionCorrecta = listaPosiciones[indexPosicionCorrecta];
		arrayRespuestasCorrectas.push(listaPosiciones2[indexPosicionCorrecta]);
		cambiarColor(imagenesMuestra, posicionCorrecta);
		cambiarListaPosiciones(listaPosiciones[indexPosicionCorrecta]);
		alternarColor();
	}
}
function setNivel(unNivel){
    nivel = unNivel;
}

function cambiarListaPosiciones(posicion){
	if (nivel === 2){		
		if(posicion === 1){
			listaPosiciones = new Array(2, 5);
			listaPosiciones2 = new Array(1, 4);
		} else if(posicion === 2){
			listaPosiciones = new Array(1, 3, 6);
			listaPosiciones2 = new Array(0, 2, 5);
		} else if(posicion === 3){
			listaPosiciones = new Array(2, 7);
			listaPosiciones2 = new Array(1, 6);
		} else if(posicion === 5){
			listaPosiciones = new Array(1, 6, 9);
			listaPosiciones2 = new Array(0, 5, 8);
		} else if(posicion === 6){
			listaPosiciones = new Array(2, 5, 7, 10);
			listaPosiciones2 = new Array(1, 4, 6, 9);
		} else if(posicion === 7){
			listaPosiciones = new Array(3, 6, 11);
			listaPosiciones2 = new Array(2, 5, 10);
		} else if(posicion === 9){
			listaPosiciones = new Array(5, 10);
			listaPosiciones2 = new Array(4, 9);
		} else if(posicion === 10){
			listaPosiciones = new Array(6, 9, 11);
			listaPosiciones2 = new Array(5, 8, 10);
		} else if(posicion === 11){
			listaPosiciones = new Array(7, 10);
			listaPosiciones2 = new Array(6, 9);
		} 
	}
	if (nivel === 3){
		if(posicion === 0){
			listaPosiciones = new Array(1, 4);
			listaPosiciones2 = new Array(1, 4);
		} else if(posicion === 1){
			listaPosiciones = new Array(0, 2, 5);
			listaPosiciones2 = new Array(0, 2, 5);
		} else if(posicion === 2){
			listaPosiciones = new Array(1, 3, 6);
			listaPosiciones2 = new Array(1, 3, 6);
		} else if(posicion === 3){
			listaPosiciones = new Array(2, 7);
			listaPosiciones2 = new Array(2, 7);
		} else if(posicion === 4){
			listaPosiciones = new Array(0, 5, 8);
			listaPosiciones2 = new Array(0, 5, 8);
		} else if(posicion === 5){
			listaPosiciones = new Array(1, 4, 6, 9);
			listaPosiciones2 = new Array(1, 4, 6, 9);
		} else if(posicion === 6){
			listaPosiciones = new Array(2, 5, 7, 10);
			listaPosiciones2 = new Array(2, 5, 7, 10);
		} else if(posicion === 7){
			listaPosiciones = new Array(3, 6, 11);
			listaPosiciones2 = new Array(3, 6, 11);
		} else if(posicion === 8){
			listaPosiciones = new Array(4, 9, 12);
			listaPosiciones2 = new Array(4, 9, 12);
		} else if(posicion === 9){
			listaPosiciones = new Array(5, 8, 10, 13);
			listaPosiciones2 = new Array(5, 8, 10, 13);
		} else if(posicion === 10){
			listaPosiciones = new Array(6, 9, 11, 14);
			listaPosiciones2 = new Array(6, 9, 11, 14);
		} else if(posicion === 11){
			listaPosiciones = new Array(7, 10, 15);
			listaPosiciones2 = new Array(7, 10, 15);
		} else if(posicion === 12){
			listaPosiciones = new Array(8, 13, 16);
			listaPosiciones2 = new Array(8, 13, 16);
		} else if(posicion === 13){
			listaPosiciones = new Array(9, 12, 14, 17);
			listaPosiciones2 = new Array(9, 12, 14, 17);
		} else if(posicion === 14){
			listaPosiciones = new Array(10, 13, 15, 18);
			listaPosiciones2 = new Array(10, 13, 15, 18);
		} else if(posicion === 15){
			listaPosiciones = new Array(11, 14, 19);
			listaPosiciones2 = new Array(11, 14, 19);
		} else if(posicion === 16){
			listaPosiciones = new Array(12, 17, 20);
			listaPosiciones2 = new Array(12, 17, 20);
		} else if(posicion === 17){
			listaPosiciones = new Array(13, 16, 18, 21);
			listaPosiciones2 = new Array(13, 16, 18, 21);
		} else if(posicion === 18){
			listaPosiciones = new Array(14, 17, 19, 22);
			listaPosiciones2 = new Array(14, 17, 19, 22);
		} else if(posicion === 19){
			listaPosiciones = new Array(15, 18, 23);
			listaPosiciones2 = new Array(15, 18, 23);
		} else if(posicion === 20){
			listaPosiciones = new Array(16, 21);
			listaPosiciones2 = new Array(16, 21);
		} else if(posicion === 21){
			listaPosiciones = new Array(17, 20, 22);
			listaPosiciones2 = new Array(17, 20, 22);
		} else if(posicion === 22){
			listaPosiciones = new Array(18, 21, 23);
			listaPosiciones2 = new Array(18, 21, 23);
		} else if(posicion === 23){
			listaPosiciones = new Array(19, 22);
			listaPosiciones2 = new Array(19, 22);
		} 

		//listaPosiciones = new Array(0,  1,  2,   3,
									//4,  5,  6,   7, 
									//8,  9,  10, 11, 
									//12, 13, 14, 15, 
									//16, 17, 18, 19,
									//20, 21, 22, 23);
	}
}

function posicionAleatoria(listaImagenesoPosiciones){
	var aleatorio=Math.floor((Math.random()*listaImagenesoPosiciones.length));
	return aleatorio;
}

function asignarImagenesRestantes(indexUsado1, indexUsado2, indexUsado3, indexUsado4){
	var indexSinUsar;
	do{
		indexSinUsar = imagenOPosicionAleatoria(listaSeleccionada);
	}
	while(indexSinUsar === indexUsado1 || indexSinUsar === indexUsado2 || indexSinUsar === indexUsado3 || indexSinUsar === indexUsado4)
	return indexSinUsar;
}

function modificarDificultad(){
	if(fase === 1 || fase === 2 || fase === 3){
		if(nivel === 1){
			imagenesMuestra[2].src = imagenesCirculo[0];
			imagenesMuestra[3].src = imagenesCirculo[0];
			
			imagenesSolucion[0].src = imagenesCirculo[0];
			imagenesSolucion[1].src = imagenesCirculo[0];
			elementos = 2;
			habilitarDeshabilitarElemento(1,elementos);
			listaPosiciones = new Array(2, 3);
			listaPosiciones2 = new Array(0, 1);
			document.getElementById("nivel2").disabled = "true";
			document.getElementById("nivel3").disabled = "true";
		}
		if(nivel === 2){
			imagenesMuestra[1].src = imagenesCirculo[0];
			imagenesMuestra[2].src = imagenesCirculo[0];
			imagenesMuestra[3].src = imagenesCirculo[0];
			imagenesMuestra[5].src = imagenesCirculo[0];
			imagenesMuestra[6].src = imagenesCirculo[0];
			imagenesMuestra[7].src = imagenesCirculo[0];
			imagenesMuestra[9].src = imagenesCirculo[0];
			imagenesMuestra[10].src = imagenesCirculo[0];
			imagenesMuestra[11].src = imagenesCirculo[0];
			
			imagenesSolucion[0].src = imagenesCirculo[0];
			imagenesSolucion[1].src = imagenesCirculo[0];
			imagenesSolucion[2].src = imagenesCirculo[0];
			imagenesSolucion[4].src = imagenesCirculo[0];
			imagenesSolucion[5].src = imagenesCirculo[0];
			imagenesSolucion[6].src = imagenesCirculo[0];
			imagenesSolucion[8].src = imagenesCirculo[0];
			imagenesSolucion[9].src = imagenesCirculo[0];
			imagenesSolucion[10].src = imagenesCirculo[0];
			elementos = 9;
			habilitarDeshabilitarElemento(1,elementos);
			listaPosiciones = new Array(1, 2, 3, 5, 6, 7, 9, 10, 11);
			listaPosiciones2 = new Array(0, 1, 2, 4, 5, 6, 8, 9, 10);
			document.getElementById("nivel1").disabled = "true";
			document.getElementById("nivel3").disabled = "true";
		}
		if(nivel === 3){
			for(i=0; i < 24; i++){
				imagenesMuestra[i].src = imagenesCirculo[0];
				imagenesSolucion[i].src = imagenesCirculo[0];
			}
			elementos = 24;
			habilitarDeshabilitarElemento(1,elementos);
			listaPosiciones = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);
			listaPosiciones2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);
			document.getElementById("nivel2").disabled = "true";
			document.getElementById("nivel1").disabled = "true";
		}
		if (fase === 1){
			ejercicioARealizar = 0;
			document.getElementById("fase2").disabled = "true";
			document.getElementById("fase3").disabled = "true";			
		}else if(fase === 2){
			ejercicioARealizar = 1;
			document.getElementById("fase1").disabled = "true";
			document.getElementById("fase3").disabled = "true";
		}else if(fase === 3){
			ejercicioARealizar = 2;
			document.getElementById("fase1").disabled = "true";
			document.getElementById("fase2").disabled = "true";
		}
		if(fase === 2 && nivel === 2 || fase === 3 && nivel === 2){
			cantidad = 4;
		}		
	}
}

function cambiarColor(listaDeImagenes, posicion){
	listaDeImagenes[posicion].src = imagenesCirculo[colorCirculo];
}

function realizarEjercicio(){
	ejercicioARealizar = fase-1;
	ejercicios[ejercicioARealizar]();
}
function alternarColor(){
	if(colorCirculo < 6){
		colorCirculo++;
	} else{
		colorCirculo = 1;
	}
}
function validarResultados(respuesta){
	if(fase === 1){
		if (respuestaCorrecta === respuesta-1){
				aciertos++;
				document.getElementById("aciertos").innerHTML = aciertos;
				cambiarColor(imagenesSolucion, respuestaCorrecta); 
				cantidad--;
				alternarColor();
				modificarDificultad();
				realizarEjercicio();
		}
		else{
			errores++;
			document.getElementById("errores").innerHTML = errores;
		}
	}else if(fase === 2){
		var contador = 0;
		var valor;
		if (nivel === 2){
			valor = 4;
		}else{
			valor = 6;
		}
		if (arrayRespuestasCorrectas[valor-cantidad] === respuesta-1){
			aciertos++;
			contador++;
			document.getElementById("aciertos").innerHTML = aciertos;
			cambiarColor(imagenesSolucion, arrayRespuestasCorrectas[valor-cantidad]); 
			if(nivel === 3){
				imagenesMuestra[arrayRespuestasCorrectas[valor-cantidad]].src = imagenesCirculo[0];
				cambiarListaPosiciones(respuesta-1);
			}else if(nivel === 2){
				imagenesMuestra[arrayRespuestasCorrectas[valor-cantidad]+1].src = imagenesCirculo[0];
				cambiarListaPosiciones(respuesta);
			}
			cantidad--;
			alternarColor();				
			realizarEjercicio();
		}
		if (contador === 0){
			errores++;
			document.getElementById("errores").innerHTML = errores;
		}
	}else if(fase === 3){
		if(arrayRespuestasCorrectas[numeroRespuesta] === respuesta-1){
			aciertos++;
			cambiarColor(imagenesSolucion, arrayRespuestasCorrectas[numeroRespuesta]);
			if(nivel === 3){
				imagenesMuestra[arrayRespuestasCorrectas[numeroRespuesta]].src = imagenesCirculo[0];
			}else if(nivel === 2){
				imagenesMuestra[arrayRespuestasCorrectas[numeroRespuesta]+1].src = imagenesCirculo[0];
			}
			document.getElementById("aciertos").innerHTML = aciertos;
			cantidad--;
			numeroRespuesta++;
			alternarColor();
		}else{
			errores++;
			document.getElementById("errores").innerHTML = errores;
		}
	}
	if(cantidad > 0){
	}
	else{
		finalizarActividad();
	}
}


function habilitarDeshabilitarElemento(habilitar,numeroDeElementos){
	for(i = 0; i < 24; i++){
		divsMuestra[i].style.visibility = "hidden";
		divsSolucion[i].style.visibility = "hidden";
	}			
	if(habilitar === 0){
		for(i = 0; i < 24; i++){
			imagenesMuestra[i].src = "";
			imagenesSolucion[i].src = "";
		}
		document.getElementById("nivel1").disabled = false;
		document.getElementById("nivel2").disabled = false;
		document.getElementById("nivel3").disabled = false;
		document.getElementById("fase1").disabled = false;
		document.getElementById("fase2").disabled = false;
		document.getElementById("fase3").disabled = false;
	}else if(habilitar === 1){
		if(numeroDeElementos === 2){	
			divsMuestra[2].style.visibility = "visible";
			divsMuestra[3].style.visibility = "visible";
			
			divsSolucion[0].style.visibility = "visible";
			divsSolucion[1].style.visibility = "visible";
		}else if(numeroDeElementos === 9){
			divsMuestra[1].style.visibility = "visible";
			divsMuestra[2].style.visibility = "visible";
			divsMuestra[3].style.visibility = "visible";
			divsMuestra[5].style.visibility = "visible";
			divsMuestra[6].style.visibility = "visible";
			divsMuestra[7].style.visibility = "visible";
			divsMuestra[9].style.visibility = "visible";
			divsMuestra[10].style.visibility = "visible";
			divsMuestra[11].style.visibility = "visible";
				
			divsSolucion[0].style.visibility = "visible";
			divsSolucion[1].style.visibility = "visible";
			divsSolucion[2].style.visibility = "visible";
			divsSolucion[4].style.visibility = "visible";
			divsSolucion[5].style.visibility = "visible";
			divsSolucion[6].style.visibility = "visible";
			divsSolucion[8].style.visibility = "visible";
			divsSolucion[9].style.visibility = "visible";
			divsSolucion[10].style.visibility = "visible";	
		}else if(numeroDeElementos === 24){
			for(i = 0; i < 24; i++){
				divsMuestra[i].style.visibility = "visible";
				divsSolucion[i].style.visibility = "visible";
			}
		}
	}
}	

function finalizarActividad(){
	habilitarDeshabilitarElemento(0,elementos);
	colorCirculo = 1;
}

function iniciarEjercicio(){
	respuestaCorrecta = 0;
	arrayRespuestasCorrectas = [];
	aciertos = 0;
	errores = 0;
	cantidad = 6;
	modificarDificultad();
	numeroRespuesta = 0;
	realizarEjercicio();
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;

}

