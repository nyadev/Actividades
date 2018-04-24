var aciertos = 0;
var errores = 0;
var fase = 1;

var tamano = [0, 1, 2];
var posicion;
var tipoFigura = [0, 1, 2];
var respuesta;
var arregloTiposDeFigurasCanvas = [];
var totalFigurasCorrectas = 0;
var idColor;
var color = ['rgb(255, 0, 0)', 'rgb(106, 43, 255)', 'rgb(40, 249, 29)', 'rgb(87, 193, 249)', 'rgb(255, 0, 191)', 'rgb(0, 109, 104)', 'rgb(242, 255, 0)', 'rgb(178, 255, 0)', 'rgb(255, 0, 76)'];
var coordenadasChicasXCuadradoCirculo =[20, 80, 100, 140];
var coordenadasChicasYCuadradoCirculo =[20, 80, 100, 140];
var coordenadasMedianasXCuadradoCirculo =[40, 100, 120];
var coordenadasMedianasYCuadradoCirculo =[40, 100, 120];
var coordenadaGrandeXCuadradoCirculo = 80;
var coordenadaGrandeYCuadradoCirculo = 80;
var anchosCuadrado = [20, 30, 70];
var radiosCirculo = [20, 30, 70];
var coordenadasChicas1Triangulo =[0, 20, 0];
var coordenadasChicas2Triangulo =[50, 0, 40];
var coordenadasChicas3Triangulo =[30, 40, 40];
var coordenadasChicas4Triangulo =[0, 35, 40];
var coordenadasChicas5Triangulo =[60, 0, 20];
var coordenadasChicas6Triangulo =[50, 35, 0];
var coordenadasMedianas1Triangulo =[50];
var coordenadasMedianas2Triangulo =[0];
var coordenadasMedianas3Triangulo =[0];
var coordenadasMedianas4Triangulo =[100];
var coordenadasMedianas5Triangulo =[100];
var coordenadasMedianas6Triangulo =[100];
var coordenadaGrande1Triangulo = 0;
var coordenadaGrande2Triangulo = 160;
var coordenadaGrande3Triangulo = 80;
var coordenadaGrande4Triangulo = 40;
var coordenadaGrande5Triangulo = 160;
var coordenadaGrande6Triangulo = 160;

var canvasOpcion = document.getElementById('canvasOpcion');
var listaCanvas = [document.getElementById('canvasEstimulo1'), document.getElementById('canvasEstimulo2'), document.getElementById('canvasEstimulo3'), document.getElementById('canvasEstimulo4'),document.getElementById('canvasEstimulo5'), 
				document.getElementById('canvasEstimulo6'), document.getElementById('canvasEstimulo7'), document.getElementById('canvasEstimulo8'), document.getElementById('canvasEstimulo9'), document.getElementById('canvasEstimulo10'), 
				document.getElementById('canvasEstimulo11'), document.getElementById('canvasEstimulo12'), document.getElementById('canvasEstimulo13'), document.getElementById('canvasEstimulo14'), document.getElementById('canvasEstimulo15'), 
				document.getElementById('canvasEstimulo16'), document.getElementById('canvasEstimulo17'), document.getElementById('canvasEstimulo18'), document.getElementById('canvasEstimulo19'), document.getElementById('canvasEstimulo20')];
var listaFiguras =[listaCanvas[0].getContext('2d'), listaCanvas[1].getContext('2d'), listaCanvas[2].getContext('2d'), listaCanvas[3].getContext('2d'), listaCanvas[4].getContext('2d'), listaCanvas[5].getContext('2d'), listaCanvas[6].getContext('2d'),
				listaCanvas[7].getContext('2d'), listaCanvas[8].getContext('2d'), listaCanvas[9].getContext('2d'), listaCanvas[10].getContext('2d'), listaCanvas[11].getContext('2d'), listaCanvas[12].getContext('2d'), listaCanvas[13].getContext('2d'), 
				listaCanvas[14].getContext('2d'), listaCanvas[15].getContext('2d'), listaCanvas[16].getContext('2d'), listaCanvas[17].getContext('2d'), listaCanvas[18].getContext('2d'), listaCanvas[19].getContext('2d')];
var figuraOpcion = canvasOpcion.getContext('2d');

//PAGINAS UTILES
//https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
//https://blog.lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8
//https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mouseover?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
//http://www.mediavida.com/foro/gamedev/conseguir-posicion-cursor-js-canvas-524687
//https://www.reddit.com/r/learnjavascript/comments/31glai/color_selector_help/cq1ff1j/
//http://jsbin.com/yibidinixa/edit?js,console,output
//https://stackoverflow.com/questions/2075337/uncaught-referenceerror-is-not-defined

function Instrucciones(){
   swal("Instrucciones",
    "Aparecerán figuras geométricas dispersas por la pantalla, el paciente deberá encontrar todas las figuras que sean igual en forma a la indicada previamente");
}

function setFase(unaFase){
	fase = unaFase;
	document.getElementById("fase").innerHTML = fase;
}

function colorOPosicionAleatoria(listaCoordenadasOColores){
	var aleatorio = Math.floor((Math.random()*(listaCoordenadasOColores.length)));
	return aleatorio;
}

function iniciarEjercicio() {
	arregloTiposDeFigurasCanvas= [];
	totalFigurasCorrectas = 0;
	limpiar(-1);
    aciertos = 0;
    errores = 0;
    document.getElementById("aciertos").innerHTML = aciertos;
    document.getElementById("errores").innerHTML = errores;
	document.getElementById("comienzo").style.visibility = "hidden";
	if(fase === 1){
		document.getElementById('estimuloBox').style.display = "inline";
		iniciarSecuencia();		
	}
	if(fase === 2){
		document.getElementById("comienzo").style.visibility = "visible";
		swal('Actividad en desarrollo');
	}
	
}

function finalizarEjercicio(){
	document.getElementById('estimuloBox').style.display = "none";
	document.getElementById("save-results").style.display = "table";
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    document.getElementById("save-results").style.display = "none";
	document.getElementById("comienzo").style.visibility = "visible";
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
    return;
}

function crearCuadroAleatorio(figura){
    idColor = colorOPosicionAleatoria(color);
    figura.fillStyle = color[idColor];
	var coordenadas = asignarTamano1();
    figura.fillRect(coordenadas[0],coordenadas[1],coordenadas[2],coordenadas[3]); //(pos X, pos Y, Ancho, Alto)
}

function crearCirculoAleatorio(figura){
    idColor = colorOPosicionAleatoria(color);
    figura.fillStyle = color[idColor];
    figura.beginPath();
	var coordenadas = asignarTamano2();
    figura.arc(coordenadas[0],coordenadas[1],coordenadas[2],0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
    figura.closePath();
    figura.fill();
}

function crearTrianguloAleatorio(figura){
	idColor = colorOPosicionAleatoria(color);
	figura.fillStyle = color[idColor];
	figura.beginPath();
	var coordenadas = asignarTamano3();
	figura.moveTo(coordenadas[0],coordenadas[1]);
	figura.lineTo(coordenadas[2],coordenadas[3]);
	figura.lineTo(coordenadas[4],coordenadas[5]);
	figura.closePath()
	figura.fill();
}

function iniciarSecuencia(){
	if (fase === 1){
		respuesta = colorOPosicionAleatoria(tipoFigura);   
		definirFigura(respuesta, figuraOpcion);
		for(i = 0; i<listaCanvas.length; i++){
			var idFigura = colorOPosicionAleatoria(tipoFigura);
			definirFigura(idFigura, listaFiguras[i]);
			arregloTiposDeFigurasCanvas.push(tipoFigura[idFigura]);
			if(idFigura === respuesta){
				totalFigurasCorrectas++;
			}
		}
	}
}

function asignarTamano1(){
	var tam = colorOPosicionAleatoria(tamano);
	var coordenadasCuadrado = [];
	if (tam === 0){
		var x = colorOPosicionAleatoria(coordenadasChicasXCuadradoCirculo);
		var y = colorOPosicionAleatoria(coordenadasChicasYCuadradoCirculo);
		var ancho = anchosCuadrado[tam];
		coordenadasCuadrado.push(coordenadasChicasXCuadradoCirculo[x]);
		coordenadasCuadrado.push(coordenadasChicasYCuadradoCirculo[y]);
		coordenadasCuadrado.push(ancho);
		coordenadasCuadrado.push(ancho);
	}
	if (tam === 1){
		var x = colorOPosicionAleatoria(coordenadasMedianasXCuadradoCirculo);
		var y = colorOPosicionAleatoria(coordenadasMedianasYCuadradoCirculo);
		var ancho = anchosCuadrado[tam];
		coordenadasCuadrado.push(coordenadasMedianasXCuadradoCirculo[x]);
		coordenadasCuadrado.push(coordenadasMedianasYCuadradoCirculo[y]);
		coordenadasCuadrado.push(ancho);
		coordenadasCuadrado.push(ancho);
	}
	if (tam === 2){
		var x = coordenadaGrandeXCuadradoCirculo;
		var y = coordenadaGrandeYCuadradoCirculo;
		var ancho = anchosCuadrado[tam];
		coordenadasCuadrado.push(x);
		coordenadasCuadrado.push(y);
		coordenadasCuadrado.push(ancho);
		coordenadasCuadrado.push(ancho);
	}
	return coordenadasCuadrado;
}

function asignarTamano2(){
	var tam = colorOPosicionAleatoria(tamano);
	var coordenadasCirculo = [];
	if (tam === 0){
		var x = colorOPosicionAleatoria(coordenadasChicasXCuadradoCirculo);
		var y = colorOPosicionAleatoria(coordenadasChicasYCuadradoCirculo);
		var rad = radiosCirculo[tam];
		coordenadasCirculo.push(coordenadasChicasXCuadradoCirculo[x]);
		coordenadasCirculo.push(coordenadasChicasYCuadradoCirculo[y]);
		coordenadasCirculo.push(rad);
	}
	if (tam === 1){
		var x = colorOPosicionAleatoria(coordenadasMedianasXCuadradoCirculo);
		var y = colorOPosicionAleatoria(coordenadasMedianasYCuadradoCirculo);
		var rad = radiosCirculo[tam];
		coordenadasCirculo.push(coordenadasMedianasXCuadradoCirculo[x]);
		coordenadasCirculo.push(coordenadasMedianasYCuadradoCirculo[y]);
		coordenadasCirculo.push(rad);
	}
	if (tam === 2){
		var x = coordenadaGrandeXCuadradoCirculo;
		var y = coordenadaGrandeYCuadradoCirculo;
		var rad = radiosCirculo[tam];
		coordenadasCirculo.push(x);
		coordenadasCirculo.push(y);
		coordenadasCirculo.push(rad);
	}
	return coordenadasCirculo;
}

function asignarTamano3(){
	var tam = colorOPosicionAleatoria(tamano);
	var coordenadasTriangulo = [];
	if (tam === 0){
		var indice = colorOPosicionAleatoria(coordenadasChicas1Triangulo);
		var c1 = coordenadasChicas1Triangulo[indice];
		var c2 = coordenadasChicas2Triangulo[indice];
		var c3 = coordenadasChicas3Triangulo[indice];
		var c4 = coordenadasChicas4Triangulo[indice];
		var c5 = coordenadasChicas5Triangulo[indice]; 
		var c6 = coordenadasChicas6Triangulo[indice];
		coordenadasTriangulo.push(c1);
		coordenadasTriangulo.push(c2);
		coordenadasTriangulo.push(c3);
		coordenadasTriangulo.push(c4);
		coordenadasTriangulo.push(c5);
		coordenadasTriangulo.push(c6);
	}
	if (tam === 1){
		var indice = colorOPosicionAleatoria(coordenadasMedianas1Triangulo);
		var c1 = coordenadasMedianas1Triangulo[indice];
		var c2 = coordenadasMedianas2Triangulo[indice];
		var c3 = coordenadasMedianas3Triangulo[indice];
		var c4 = coordenadasMedianas4Triangulo[indice];
		var c5 = coordenadasMedianas5Triangulo[indice]; 
		var c6 = coordenadasMedianas6Triangulo[indice];
		coordenadasTriangulo.push(c1);
		coordenadasTriangulo.push(c2);
		coordenadasTriangulo.push(c3);
		coordenadasTriangulo.push(c4);
		coordenadasTriangulo.push(c5);
		coordenadasTriangulo.push(c6);
	}
	if (tam === 2){
		var c1 = coordenadaGrande1Triangulo;
		var c2 = coordenadaGrande2Triangulo;
		var c3 = coordenadaGrande3Triangulo;
		var c4 = coordenadaGrande4Triangulo;
		var c5 = coordenadaGrande5Triangulo; 
		var c6 = coordenadaGrande6Triangulo;
		coordenadasTriangulo.push(c1);
		coordenadasTriangulo.push(c2);
		coordenadasTriangulo.push(c3);
		coordenadasTriangulo.push(c4);
		coordenadasTriangulo.push(c5);
		coordenadasTriangulo.push(c6);
	}
	return coordenadasTriangulo;
}

function definirFigura(idFig, fig){
	if(idFig === 0){
		crearCuadroAleatorio(fig);
	}
	if(idFig === 1){
		crearCirculoAleatorio(fig);
	}
	if(idFig === 2){
		crearTrianguloAleatorio(fig);
	}
}

function limpiar(idCanvas){
	if(idCanvas === -1){
			figuraOpcion.clearRect(0,0,160,160);
		for(i=0; i<listaFiguras.length; i++){
			listaFiguras[i].clearRect(0,0,160,160);
		}
	}else{
		listaFiguras[idCanvas].clearRect(0,0,160,160);
	}
}

function validarRespuesta(e,idCanv){
	var rect = listaCanvas[idCanv].getBoundingClientRect();
	var scrollPixel = document.body.scrollTop;
	console.log(rect.left +" "+ rect.top+"	"+scrollPixel);
	var y = (e.pageY-rect.top)- scrollPixel;
	var infoImg = listaFiguras[idCanv].getImageData((e.pageX-rect.left), (y), 1, 1);
	var rojo = infoImg.data[0];
	var verde = infoImg.data[1];
	var azul = infoImg.data[2];
	var alpha = infoImg.data[3];
	
	console.log((e.pageX-rect.left)+" "+(y)+"   "+rojo+" "+verde+" "+azul);
	if(rojo === 255 && verde === 255 && azul === 255 || rojo === 0 && verde === 0 && azul === 0){
		swal('Error, haz seleccionado un espacio en blanco');
		errores++;
		document.getElementById("errores").innerHTML = errores;
	}
	else{
		if(arregloTiposDeFigurasCanvas[idCanv] === respuesta){
			aciertos++;
			document.getElementById("aciertos").innerHTML = aciertos;
			limpiar(idCanv);
			totalFigurasCorrectas--;
		}else{
			swal('Error, las figuras no coinciden');
			errores++;
			document.getElementById("errores").innerHTML = errores;
		}
		if(totalFigurasCorrectas === 0){
			mostrarResultados();
		}
	}
}

function mostrarResultados(){
	document.getElementById("estimuloBox").style.display = "none";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.getElementById("save-results").style.display = "table";
}
