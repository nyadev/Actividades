var fase = 1;
var	aciertos = 0;
var	errores = 0;
var arrayRespuestasCorrectas = [];
var posicionActual = 0;
var listaDiferencias = [];
var listaInstrucciones = [];
var idDiferencia = 0;

var divs = [document.getElementById("div1"), document.getElementById("div2"), document.getElementById("div3"), document.getElementById("div4"), 
document.getElementById("div5"), document.getElementById("div6"), document.getElementById("div7"), document.getElementById("div8"), 
document.getElementById("div9"), document.getElementById("div10"), document.getElementById("div11"), document.getElementById("div12"), 
document.getElementById("div13"), document.getElementById("div14"), document.getElementById("div15"), document.getElementById("div16"),
document.getElementById("div17"), document.getElementById("div18"), document.getElementById("div19"), document.getElementById("div20"), 
document.getElementById("div21"), document.getElementById("div22"), document.getElementById("div23"), document.getElementById("div24")];

var imagenes = [document.getElementById("imagen1"), document.getElementById("imagen2"), document.getElementById("imagen3"), document.getElementById("imagen4"), 
document.getElementById("imagen5"), document.getElementById("imagen6"), document.getElementById("imagen7"), document.getElementById("imagen8"), 
document.getElementById("imagen9"), document.getElementById("imagen10"), document.getElementById("imagen11"), document.getElementById("imagen12"), 
document.getElementById("imagen13"), document.getElementById("imagen14"), document.getElementById("imagen15"), document.getElementById("imagen16"), 
document.getElementById("imagen17"), document.getElementById("imagen18"), document.getElementById("imagen19"), document.getElementById("imagen20"), 
document.getElementById("imagen21"), document.getElementById("imagen22"), document.getElementById("imagen23"), document.getElementById("imagen24")];

var camino1 = [0, 1, 2, 3, 4, 5, 11, 17, 23];
var camino2 = [0, 6, 7, 13, 14, 15, 21, 22, 23];
var camino3 = [0, 6, 12, 18, 19, 20, 21, 15, 16, 17, 23];
var camino4 = [0, 1, 2, 8, 9, 10, 16, 17, 23];
var camino5 = [0, 6, 7, 8, 2, 3, 4, 10, 11, 17, 23];
var camino6 = [0, 6, 7, 13, 19, 20, 21, 22, 23];
var camino7 = [0, 1, 7, 13, 12, 18, 19, 20, 21, 22, 23];
var camino8 = [0, 6, 7, 8, 2, 3, 9, 15, 21, 22, 23];
var camino9 = [0, 1, 2, 3, 9, 15, 16, 17, 23];
var camino10 = [0, 6, 12, 18, 19, 20, 14, 8, 2, 3, 4, 5, 11, 17, 23];
var camino11 = [0, 1, 7, 13, 19, 20, 21, 15, 9, 3, 4, 5, 11, 17, 23];
var camino12 = [0, 6, 7, 8, 9, 15, 21, 22, 23];
var camino13 = [0, 6, 12, 13, 14, 15, 16, 17, 23];
var camino14 = [0, 1, 7, 8, 9, 15, 16, 17, 23];
var camino15 = [0, 1, 7, 13, 14, 15, 9, 10, 11, 17, 23];

var caminosRespuesta = [camino1, camino2, camino3, camino4, camino5, camino6, camino7, camino8, camino9, camino10, camino11, camino12, camino13, camino14, camino15];
var arrayRespuestasCorrectas;

function caminoAleatorio(listaCaminos){
	var aleatorio = Math.floor((Math.random()*listaCaminos.length));
	return aleatorio;
}

function determinaInstrucciones(diferencia){
	var msg = " ";
	if(diferencia === 1){
		msg = "Derecha";
	}else if(diferencia === -1){
		msg = "Izquierda";
	}else if(diferencia === -6){
		msg = "Arriba";
	}else if(diferencia === 6){
		msg = "Abajo";
	}
	return msg;
}

function mover(posicionAnterior, nuevaPosicion){
	imagenes[posicionAnterior].src = "Blanco.png";
	imagenes[nuevaPosicion].src = "Perro.png";
}

function setFase(unaFase){
	fase = unaFase;
}

function Instrucciones(){
   swal("Instrucciones",
    "Aparecerá un objeto en el extremo de la pantalla y al otro extremo otro objeto que servirá de meta, el paciente deberá llegar a este dando click en las flechas correspondientes.");
}

function iniciarEjercicio(){
	arrayRespuestasCorrectas = [];
	listaDiferencias = [];
	listaInstrucciones = [];
	numeroDeCamino = caminoAleatorio(caminosRespuesta);
	arrayRespuestasCorrectas = caminosRespuesta[numeroDeCamino];
	listaDiferencias = obtenerDiferencias(arrayRespuestasCorrectas);
	console.log(numeroDeCamino + " Camino: " + arrayRespuestasCorrectas + " Dif: " + listaDiferencias);
	if(fase === 1){
		blanquearCasillas();
		listaInstrucciones = obtenerInstrucciones(listaDiferencias);
		console.log(listaInstrucciones);
		document.getElementById("mensaje").style.visibility = "visible";
		document.getElementById("mensaje").innerHTML = listaInstrucciones[0];
	}else{
		colorearCasillas(arrayRespuestasCorrectas);
	}
	imagenes[0].src = "Perro.png";
	imagenes[23].src = "Hueso.png";
	aciertos = 0;
	errores = 0;
	posicionActual = 0;
	cantidad = 6;
	idDiferencia = 0;
	//modificarDificultad();
	numeroRespuesta = 0;
	//realizarEjercicio();
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("comienzo").style.visibility = "hidden";
	document.getElementById("tabla").style.visibility = "visible";
}

function validarMovimiento(diferencia){
	if(diferencia === listaDiferencias[idDiferencia]){
		aciertos++;
		idDiferencia++;
		document.getElementById("aciertos").innerHTML = aciertos;
		mover(posicionActual, posicionActual+(diferencia));
		posicionActual = posicionActual +(diferencia);
		if(fase === 1){
			document.getElementById("mensaje").innerHTML = listaInstrucciones[idDiferencia];
		}
		if(posicionActual === 23){
			finalizarEjercicio(1);
		}
	}else{
		errores++;
		document.getElementById("errores").innerHTML = errores;
		if(errores === 10){
			finalizarEjercicio(0);
		}
	}
}

function obtenerDiferencias(arrayRes){
	var diferencia = 0;
	var listaDif = [];
	for(i = 0; i < arrayRes.length-1; i++){
		diferencia = arrayRes[i+1]- arrayRes[i];
		listaDif.push(diferencia);
	}
	return listaDif
}

function obtenerInstrucciones(arrayDife){
	var listaInst = [];
	for(i = 0; i < arrayDife.length; i++){
		listaInst.push(determinaInstrucciones(arrayDife[i]));
	}
	return listaInst;
}

function colorearCasillas(arrayCamino){
	for(i = 0; i < imagenes.length; i++){
		imagenes[i].src = "Azul.png";
	}
	for(i = 0; i < arrayCamino.length; i++){
		imagenes[arrayCamino[i]].src = "Blanco.png";
	}
}

function blanquearCasillas(){
	for(i = 0; i < imagenes.length; i++){
		imagenes[i].src = "Blanco.png";
	}
}

function finalizarEjercicio(num){
	if (num === 0){
		document.getElementById("tabla").style.visibility = "hidden";
		document.getElementById("mensaje").style.visibility = "hidden";
		document.getElementById("comienzo").style.visibility = "visible";
	} else{
		document.getElementById("tabla").style.visibility = "hidden";
		document.getElementById("mensaje").style.visibility = "hidden";
		document.getElementById("comienzo").style.visibility = "visible";
	}
}


