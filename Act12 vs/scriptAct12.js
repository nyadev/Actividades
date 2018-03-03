function Instrucciones(){
   swal("Instrucciones",
    "Se muestra una imagen incompleta a partir de la cual el paciente seleccionará la opción que corresponda a la figura que formaría en caso de estar completa.");
}

var aciertos = 0;
var errores = 0;
var nivel = 1;
var cantidad = 6;
var respuestaCorrecta;
var listaPosiciones = new Array(1,2,3,4);

var imagenesCompletasNivel1 = new Array('Niv1Completo1.png', 'Niv1Completo2.png', 'Niv1Completo3.png', 'Niv1Completo4.png', 'Niv1Completo5.png', 'Niv1Completo6.png', 'Niv1Completo7.png', 'Niv1Completo8.png', 'Niv1Completo9.png');
var imagenesCompletasNivel2 = new Array('Niv2Completo1.png', 'Niv2Completo2.png', 'Niv2Completo3.png', 'Niv2Completo4.png', 'Niv2Completo5.png', 'Niv2Completo6.png', 'Niv2Completo7.png', 'Niv2Completo8.png', 'Niv2Completo9.png', 'Niv2Completo10.png', 'Niv2Completo11.png', 'Niv2Completo12.png', 'Niv2Completo13.png');
var imagenesCompletasNivel3 = new Array('Niv3Completo1.png', 'Niv3Completo2.png', 'Niv3Completo3.png', 'Niv3Completo4.png',);
var imagenesCompletasNivel4 = new Array();
var imagenesIncompletasNivel1 = new Array('Niv1Incompleto1.png', 'Niv1Incompleto2.png', 'Niv1Incompleto3.png', 'Niv1Incompleto4.png', 'Niv1Incompleto5.png', 'Niv1Incompleto6.png', 'Niv1Incompleto7.png', 'Niv1Incompleto8.png', 'Niv1Incompleto9.png');
var imagenesIncompletasNivel2 = new Array('Niv2Incompleto1.png', 'Niv2Incompleto2.png', 'Niv2Incompleto3.png', 'Niv2Incompleto4.png', 'Niv2Incompleto5.png', 'Niv2Incompleto6.png', 'Niv2Incompleto7.png', 'Niv2Incompleto8.png', 'Niv2Incompleto9.png', 'Niv2Incompleto10.png', 'Niv2Incompleto11.png', 'Niv2Incompleto12.png', 'Niv2Incompleto13.png');
var imagenesIncompletasNivel3 = new Array('Niv3Incompleto1.png', 'Niv3Incompleto2.png', 'Niv3Incompleto3.png', 'Niv3Incompleto4.png',);
var imagenesIncompletasNivel4 = new Array();

var listaSeleccionada = imagenesIncompletasNivel1;
var listaSeleccionada2 = imagenesCompletasNivel1;

function imagenOPosicionAleatoria(listaImagenesoPosiciones){
	var aleatorio=Math.floor((Math.random()*listaImagenesoPosiciones.length));
	return aleatorio;
}

function buscarImagen(listaImagenes, nombreImagen){
	var indexLista=0;
	for(i=0; i<listaImagenes.length; i++){
		if(nombreImagen.equalsIgnoreCase(listaImagenes[i])){
			indexLista=i;
		}
	}
	return indexLista;
}

function setNivel(unNivel){
     if(unNivel===1){
        nivel=unNivel;
		listaSeleccionada=imagenesIncompletasNivel1;
		listaSeleccionada2=imagenesCompletasNivel1;
    }
    if(unNivel===2){
        nivel=unNivel;
		listaSeleccionada=imagenesIncompletasNivel2;
		listaSeleccionada2=imagenesCompletasNivel2;
    }
    if(unNivel===3){
        nivel=unNivel;
		listaSeleccionada=imagenesIncompletasNivel3;
		listaSeleccionada2=imagenesCompletasNivel3;
    }
    if(unNivel===4){
        nivel=unNivel;
		listaSeleccionada=imagenesIncompletasNivel4;
		listaSeleccionada2=imagenesCompletasNivel4;
    }   
}

function iniciarEjercicio(){
	aciertos = 0;
	errores = 0;
	cantidad = 6;
	realizarEjercicio();
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("div0").style.visibility="visible";
	document.getElementById("div1").style.visibility="visible";
	document.getElementById("div2").style.visibility="visible";
	document.getElementById("div3").style.visibility="visible";
	document.getElementById("div4").style.visibility="visible";
}

function asignarImagenesRestantes(indexUsado1, indexUsado2, indexUsado3){
	var indexSinUsar;
	do{
		indexSinUsar = imagenOPosicionAleatoria(listaSeleccionada2);
	}
	while(indexSinUsar === indexUsado1 || indexSinUsar === indexUsado2 || indexSinUsar === indexUsado3)
	return indexSinUsar;
}

function realizarEjercicio(){
	var indexImagenIncompleta = imagenOPosicionAleatoria(listaSeleccionada);
	var indexImagenCompleta = indexImagenIncompleta;
	var imagenIncompleta = listaSeleccionada[indexImagenIncompleta];
	var imagenCompleta = listaSeleccionada2[indexImagenCompleta];
	var indexPosicionImagenCompleta = imagenOPosicionAleatoria(listaPosiciones);
	var posicionImagenCompleta = listaPosiciones[indexPosicionImagenCompleta];
	
	respuestaCorrecta = posicionImagenCompleta;
	
	var indexImagenCompleta2 = asignarImagenesRestantes(indexImagenCompleta,100,102);
	var indexExtra = indexImagenCompleta2;
	var imagenRandom1 = listaSeleccionada2[indexImagenCompleta2];
	indexImagenCompleta2 = asignarImagenesRestantes(indexImagenCompleta, indexExtra,102);
	var indexExtra2= indexImagenCompleta2;
	var imagenRandom2 = listaSeleccionada2[indexImagenCompleta2];
	indexImagenCompleta2 = asignarImagenesRestantes(indexImagenCompleta, indexExtra, indexExtra2);
	var imagenRandom3 = listaSeleccionada2[indexImagenCompleta2];
	
	document.getElementById("imagen0").src = imagenIncompleta;
	if(posicionImagenCompleta === 1){
		document.getElementById("imagen1").src = imagenCompleta;
		document.getElementById("imagen2").src = imagenRandom1;
		document.getElementById("imagen3").src = imagenRandom2;
		document.getElementById("imagen4").src = imagenRandom3;
	}else if(posicionImagenCompleta === 2){
		document.getElementById("imagen1").src = imagenRandom1;
		document.getElementById("imagen2").src = imagenCompleta;
		document.getElementById("imagen3").src = imagenRandom2;
		document.getElementById("imagen4").src = imagenRandom3;
	}else if(posicionImagenCompleta === 3){
		document.getElementById("imagen1").src = imagenRandom1;
		document.getElementById("imagen2").src = imagenRandom2;
		document.getElementById("imagen3").src = imagenCompleta;
		document.getElementById("imagen4").src = imagenRandom3;
	}else if(posicionImagenCompleta === 4){
		document.getElementById("imagen1").src = imagenRandom1;
		document.getElementById("imagen2").src = imagenRandom2;
		document.getElementById("imagen3").src = imagenRandom3;
		document.getElementById("imagen4").src = imagenCompleta;
	}
	
}

function validarResultados(respuesta){
	if (respuestaCorrecta === respuesta){
		aciertos++;
		document.getElementById("aciertos").innerHTML=aciertos;
	} else{
		errores++;
		document.getElementById("errores").innerHTML=errores;
	}
	if(cantidad>0){
		cantidad--;
		realizarEjercicio();
	}
	else{
		finalizarActividad();
	}
}

function finalizarActividad(){
	document.getElementById("div0").style.visibility="hidden";
	document.getElementById("div1").style.visibility="hidden";
	document.getElementById("div2").style.visibility="hidden";
	document.getElementById("div3").style.visibility="hidden";
	document.getElementById("div4").style.visibility="hidden";
	document.getElementById("imagen1").src = "";
	document.getElementById("imagen2").src = "";
	document.getElementById("imagen3").src = "";
	document.getElementById("imagen4").src = "";
}
