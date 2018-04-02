function Instrucciones(){
   swal("Instrucciones",
    "Se muestra un conjunto de imágenes sobrepuestas de donde el paciente identificará las diferentes imágenes que la componen.");
}
var nivel = 1;
var fase = 1;
var aciertos = 0;
var errores = 0;
var cantidad = 3;
var respuestaCorrecta;

var imagenesFase1Nivel1 = new Array('Niv1Fase1-1.png', 'Niv1Fase1-2.png', 'Niv1Fase1-3.png', 'Niv1Fase1-4.png', 'Niv1Fase1-5.png', 'Niv1Fase1-6.png', 'Niv1Fase1-7.png', 'Niv1Fase1-8.png', 'Niv1Fase1-9.png', 'Niv1Fase1-10.png', 'Niv1Fase1-11.png');
var imagenesFase1Nivel2 = new Array('Niv2Fase1-1.png', 'Niv2Fase1-2.png', 'Niv2Fase1-3.png', 'Niv2Fase1-4.png', 'Niv2Fase1-5.png', 'Niv2Fase1-6.png');
var imagenesFase1Nivel3 = new Array('', '', '', '', '');
var imagenesFase2Nivel1 = new Array('Niv1Fase2-1.png', 'Niv1Fase2-2.png', 'Niv1Fase2-3.png', 'Niv1Fase2-4.png', 'Niv1Fase2-5.png', 'Niv1Fase2-6.png', 'Niv1Fase2-7.png', 'Niv1Fase2-8.png', 'Niv1Fase2-9.png', 'Niv1Fase2-10.png', 'Niv1Fase2-11.png', 'Niv1Fase2-12.png', 'Niv1Fase2-13.png');
var imagenesFase2Nivel2 = new Array('Niv2Fase2-1.png', 'Niv2Fase2-2.png', 'Niv2Fase2-3.png', 'Niv2Fase2-4.png', 'Niv2Fase2-5.png', 'Niv2Fase2-6.png');
var imagenesFase2Nivel3 = new Array('', '', '', '', '');

var radioBotones = document.getElementsByName("niveles");
var radioBotones2 = document.getElementsByName("fases");

var listaSeleccionada = imagenesFase1Nivel1;
var listaPosiciones = new Array(1, 2, 3, 4, 5);

function setFase(unaFase){
	fase=unaFase;
	document.getElementById("fase").innerHTML = fase;
}

function setNivel(unNivel){
    nivel=unNivel;
	document.getElementById("nivel").innerHTML = nivel;
}

function imagenOPosicionAleatoria(listaImagenesoPosiciones){
	var aleatorio = Math.floor((Math.random()*listaImagenesoPosiciones.length));
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
	if(fase === 1){
		if(nivel === 1){
			listaSeleccionada = imagenesFase1Nivel1;
		}
		if(nivel === 2){
			listaSeleccionada = imagenesFase1Nivel2;
		}
		if(nivel === 3){
			listaSeleccionada = imagenesFase1Nivel3;
		}
	}
	else if(fase === 2){
		if(nivel === 1){
			listaSeleccionada = imagenesFase2Nivel1;
		}
		if(nivel === 2){
			listaSeleccionada = imagenesFase2Nivel2;
		}
		if(nivel === 3){
			listaSeleccionada = imagenesFase2Nivel3;
		}	
	}
}

function iniciarEjercicio(){
	aciertos = 0;
	errores = 0;
	cantidad = 3;
	modificarDificultad();
	realizarEjercicio();
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("div0").style.visibility="visible";
	document.getElementById("div1").style.visibility="visible";
	document.getElementById("div2").style.visibility="visible";
	document.getElementById("div3").style.visibility="visible";
	document.getElementById("div4").style.visibility="visible";
	document.getElementById("div5").style.visibility="visible";
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i < radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
	for(var i = 0; i < radioBotones2.length; i++){
		radioBotones2[i].disabled = true;
	}
}

function realizarEjercicio(){
	var indexImagenCorrecta = imagenOPosicionAleatoria(listaSeleccionada);
	var indexImagenCorrecta2 = asignarImagenesRestantes(indexImagenCorrecta,100,101,102);
	var indexImagenCorrecta3 = asignarImagenesRestantes(indexImagenCorrecta, indexImagenCorrecta2,100,101);
	var indexImagenExtra = asignarImagenesRestantes(indexImagenCorrecta, indexImagenCorrecta2, indexImagenCorrecta3,100);
	var indexImagenExtra2 = asignarImagenesRestantes(indexImagenCorrecta, indexImagenCorrecta2, indexImagenCorrecta3,indexImagenExtra);
	var indexPosicionImagenCorrecta = imagenOPosicionAleatoria(listaPosiciones);
	
	var imagenCorrecta = listaSeleccionada[indexImagenCorrecta];	
	var imagenCorrecta2 = listaSeleccionada[indexImagenCorrecta2];
	var imagenCorrecta3 = listaSeleccionada[indexImagenCorrecta3];
	var imagenRandom = listaSeleccionada[indexImagenExtra];
	var imagenRandom2 = listaSeleccionada[indexImagenExtra2];
	var posicionImagenCorrecta = listaPosiciones[indexPosicionImagenCorrecta];
	
	document.getElementById("img0").src = imagenCorrecta;
	document.getElementById("img1").src = imagenCorrecta2;
	document.getElementById("img2").src = imagenCorrecta3;
	if(posicionImagenCorrecta === 1){
		document.getElementById("imagen1").src = imagenCorrecta;
		document.getElementById("imagen2").src = imagenRandom;
		document.getElementById("imagen3").src = imagenCorrecta3;
		document.getElementById("imagen4").src = imagenCorrecta2;
		document.getElementById("imagen5").src = imagenRandom2;
		respuestaCorrecta = new Array(1, 3, 4);
	}else if(posicionImagenCorrecta === 2){
		document.getElementById("imagen1").src = imagenCorrecta2;
		document.getElementById("imagen2").src = imagenCorrecta;
		document.getElementById("imagen3").src = imagenRandom;
		document.getElementById("imagen4").src = imagenRandom2;
		document.getElementById("imagen5").src = imagenCorrecta3;
		respuestaCorrecta = new Array(1, 2, 5);
	}else if(posicionImagenCorrecta === 3){
		document.getElementById("imagen1").src = imagenRandom2;
		document.getElementById("imagen2").src = imagenCorrecta3;
		document.getElementById("imagen3").src = imagenCorrecta;
		document.getElementById("imagen4").src = imagenRandom;
		document.getElementById("imagen5").src = imagenCorrecta2;
		respuestaCorrecta = new Array(2, 3, 5);
	}else if(posicionImagenCorrecta === 4){
		document.getElementById("imagen1").src = imagenRandom;
		document.getElementById("imagen2").src = imagenCorrecta;
		document.getElementById("imagen3").src = imagenCorrecta2;
		document.getElementById("imagen4").src = imagenCorrecta3;
		document.getElementById("imagen5").src = imagenRandom2;
		respuestaCorrecta = new Array(2, 3, 4);
	}
	else if(posicionImagenCorrecta === 5){
		document.getElementById("imagen1").src = imagenCorrecta2;
		document.getElementById("imagen2").src = imagenRandom;
		document.getElementById("imagen3").src = imagenRandom2;
		document.getElementById("imagen4").src = imagenCorrecta3;
		document.getElementById("imagen5").src = imagenCorrecta;
		respuestaCorrecta = new Array(1, 4, 5);
	}
	
}

function validarResultados(respuesta){
	var contador = 0;
	deshabilitarElemento(respuesta);
	for (i = 0; i<respuestaCorrecta.length; i++){
		if (respuestaCorrecta [i] === respuesta){
			contador++;
			aciertos++;
			document.getElementById("aciertos").innerHTML=aciertos;
		} 
	}
	
	if (contador === 0){
		swal('Error, la figura no corresponde al conjunto');
		errores++;
		document.getElementById("errores").innerHTML=errores;
	}else{
		contador = 0;
		cantidad--;
	}
	if(cantidad>0){
	}
	else{
		finalizarActividad();
	}
}

function deshabilitarElemento(posicionElemento){
	if(posicionElemento === 0){
		document.getElementById("div0").style.visibility="hidden";
	}
	if(posicionElemento === 1){
		document.getElementById("div1").style.visibility="hidden";
	}
	if(posicionElemento === 2){
		document.getElementById("div2").style.visibility="hidden";
	}
	if(posicionElemento === 3){
		document.getElementById("div3").style.visibility="hidden";
	}
	if(posicionElemento === 4){
		document.getElementById("div4").style.visibility="hidden";
	}
	if(posicionElemento === 5){
		document.getElementById("div5").style.visibility="hidden";
	}
}

function finalizarActividad(){
	deshabilitarElemento(0);
	deshabilitarElemento(1);
	deshabilitarElemento(2);
	deshabilitarElemento(3);
	deshabilitarElemento(4);
	deshabilitarElemento(5);
	document.getElementById("imagen1").src = "";
	document.getElementById("imagen2").src = "";
	document.getElementById("imagen3").src = "";
	document.getElementById("imagen4").src = "";
	document.getElementById("imagen5").src = "";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.getElementById("save-results").style.display = "table";
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    document.getElementById("save-results").style.display = "none";
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
	document.getElementById("comienzo").style.visibility = "visible"; 
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
	for(var i = 0; i<radioBotones2.length; i++){
		radioBotones2[i].disabled = false;
	}
    return;
}

