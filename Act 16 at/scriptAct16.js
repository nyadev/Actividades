var canvasFijo1 = document.getElementById('figuraFija1');
var canvasFijo2 = document.getElementById('figuraFija2');
var canvasFijo3 = document.getElementById('figuraFija3');
var canvasFigura = document.getElementById('canvasOpcion');
var figuraFija1 = canvasFijo1.getContext('2d');
var figuraFija2 = canvasFijo2.getContext('2d');
var figuraFija3 = canvasFijo3.getContext('2d');
var figuraOpcion = canvasFigura.getContext('2d');
var color = ['rgb(255, 0, 0)', 'rgb(106, 43, 255)', 'rgb(40, 249, 29)', 'rgb(87, 193, 249)', 'rgb(255, 0, 191)', 'rgb(0, 109, 104)', 'rgb(242, 255, 0)'];
var aciertos = 0;
var errores = 0;
var nivel = 1;
var idElemento = 0;
var contador = 0;
var cantidadCir = 9;
var cantidadDeEspacios = 0;
var msg;
var respuesta = 0;
var respuestaArreglo = [ ];
var retardo;
var tiempoMustraResultados = 45000;
var tiempoCir = 5000;
var cantiRespuestas = 1;

function Instrucciones(){
	swal(
	"Instrucciones",
	"Aparecerán circulo de distinto color, el paciente debera pulsar la barra espaciadora en todos los colores menos el indicado."
	);
}

function mostrarlista(){
    idElemento = numeroAleatoreo(color);
	//figura1 = cambiarFig(1);
	//figura1.clearRect(10,10,200,200);
	//figura2 = cambiarFig(2);
	//figura2.clearRect(10,10,200,200);
	//figura3 = cambiarFig(3);
	//figura3.clearRect(10,10,200,200);
	if(nivel < 4){
		figura1 = cambiarFig(1);
		figura1.clearRect(0,0,160,160);
		
		figura2 = cambiarFig(2);
		figura2.clearRect(0,0,160,160);
		figura2.fillStyle = respuesta;
		figura2.beginPath();
		figura2.arc(80,80,80,0,Math.PI*2,true); 
		figura2.closePath();
		figura2.fill();
	}
	else{
		if(nivel < 6 && nivel > 3){
			var color1 = respuestaArreglo[0];
			//var color2 = respuestaArreglo[1];
			figura1 = cambiarFig(1);
			figura1.clearRect(0,0,200,200);
			figura1.fillStyle = color1;
			figura1.beginPath();
			figura1.arc(80,80,80,0,Math.PI*2,true); 
			figura1.closePath();
			figura1.fill();
			
			figura2 = cambiarFig(2);
			figura2.clearRect(0,0,160,160);
			
			figura3 = cambiarFig(3);
			figura3.clearRect(0, 0,160,160);
			figura3.fillStyle = respuestaArreglo[1];
			figura3.beginPath();
			figura3.arc(80,80,80,0,Math.PI*2,true); 
			figura3.closePath();
			figura3.fill();
		}
		else{
			figura1 = cambiarFig(1);
			figura1.clearRect(0,0,160,160);
			figura1.fillStyle = respuestaArreglo[0];
			figura1.beginPath();
			figura1.arc(80,80,80,0,Math.PI*2,true); 
			figura1.closePath();
			figura1.fill();
			
			figura2 = cambiarFig(2);
			figura2.clearRect(0,0,160,160);
			figura2.fillStyle = respuestaArreglo[1];
			figura2.beginPath();
			figura2.arc(80,80,80,0,Math.PI*2,true); 
			figura2.closePath();
			figura2.fill();
			
			figura3 = cambiarFig(3);
			figura3.clearRect(0,0,160,160);
			figura3.fillStyle = respuestaArreglo[2];
			figura3.beginPath();
			figura3.arc(80,80,80,0,Math.PI*2,true); 
			figura3.closePath();
			figura3.fill();
		}
	}
	//document.getElementById("respuesta").innerHTML = msg;
    //document.getElementById("estimulo").innerHTML = color[idElemento];
	figuraO = cambiarFig(4);
    figuraO.clearRect(0,0,160,160);
	figuraO.fillStyle = color[idElemento];
	figuraO.beginPath();
	figuraO.arc(80,80,80,0,Math.PI*2,true); 
	figuraO.closePath();
	figuraO.fill();
    console.log(color[idElemento]);
    contador++;
	cantidadDeEspacios = 0;
    console.log("contador: " + contador + " cantidadCir: " + cantidadCir + " tiempoCambio: " + tiempoCir+ " " + msg);
    if(cantidadCir - 1 < contador){
        console.log("Paramos");
        clearInterval(retardo);
        mostrarResultados();
    }
}

function validarEvento(evento){
	var codigo = evento.keyCode;
	console.log("codigo de la tecla:"+codigo);
	//Codigo 32 = barraEspaciadora
	if(cantidadDeEspacios === 0 && codigo === 32){
		if(cantiRespuestas === 1){
			if(!(color[idElemento] === respuesta)){
				aciertos++;
				cantidadDeEspacios = 1;
				document.getElementById("aciertos").innerHTML = aciertos;			
			}
			else{
				errores++;
				cantidadDeEspacios = 1;		
				document.getElementById("errores").innerHTML = errores;	
			}	
		}
		else{
			var iguales = 0;
			for(i = 0; i < respuestaArreglo.length; i++){
				if(color[idElemento] === respuestaArreglo[i]){
					iguales++;
				}
			}
			if(iguales > 0){
				errores++;
				cantidadDeEspacios = 1;		
				document.getElementById("errores").innerHTML = errores;	
			}else{
				aciertos++;
				cantidadDeEspacios = 1;
				document.getElementById("aciertos").innerHTML = aciertos;	
			}
		}
	}		
}

function iniciarSecuencia(){
	mostrarOpciones();
	retardo = setInterval(function(){mostrarlista();},tiempoCir);//5000 son 5s que se muestra una letra
}

function iniciarEjercicio(){
	var respuestaTemporal;
    idElemento = 0;
	aciertos = 0;
	errores = 0;
    contador = 0;
	respuesta = 0;
	respuestaArreglo = [];
	figuraFija1.clearRect(0,0,160,160);
	figuraFija2.clearRect(0,0,160,160);
	figuraFija3.clearRect(0,0,160,160);
	figuraOpcion.clearRect(0,0,160,160);
	if(nivel > 3){
		if(nivel > 5){
			var col = numeroAleatoreo(color);
			cantiRespuestas = 3;
			respuestaTemporal = color[col];
			respuestaArreglo.push(respuestaTemporal);
			color.splice(col, 1);
			col = numeroAleatoreo(color);
			respuestaTemporal = color[col];
			respuestaArreglo.push(respuestaTemporal);
			color.splice(col, 1);
			col = numeroAleatoreo(color);
			respuestaTemporal = color[col];
			respuestaArreglo.push(respuestaTemporal);
			msg = respuestaArreglo[0] + " " + respuestaArreglo[1] +" " + respuestaArreglo[2];
			color = ['rgb(255, 0, 0)', 'rgb(106, 43, 255)', 'rgb(40, 249, 29)', 'rgb(87, 193, 249)', 'rgb(255, 0, 191)', 'rgb(0, 109, 104)', 'rgb(242, 255, 0)'];
		}else{
			var col = numeroAleatoreo(color);
			cantiRespuestas = 2;
			respuestaTemporal = color[col];
			respuestaArreglo.push(respuestaTemporal);
			color.splice(col, 1);
			col = numeroAleatoreo(color);
			respuestaTemporal = color[col];
			respuestaArreglo.push(respuestaTemporal);
			msg = respuestaArreglo[0] + " " + respuestaArreglo[1];
			color = ['rgb(255, 0, 0)', 'rgb(106, 43, 255)', 'rgb(40, 249, 29)', 'rgb(87, 193, 249)', 'rgb(255, 0, 191)', 'rgb(0, 109, 104)', 'rgb(242, 255, 0)'];
		}
	}else{
		cantiRespuestas = 1;
		respuesta = color[numeroAleatoreo(color)];
		msg = respuesta;
	}
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    document.addEventListener("keydown", validarEvento);
    iniciarSecuencia();
}

function cambiarFig(i){
    var fig = null;
    switch(i) {
        case 1:
            fig = figuraFija1;
            return fig;
        case 2:
            fig = figuraFija2;
            return fig;
        case 3:
            fig = figuraFija3;
            return fig;
        case 4:
            fig = figuraOpcion;
            return fig;
        default:
            return null;
    }
    return null;
}

function mostrarResultados(){
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.removeEventListener("keydown", validarEvento);
}

function mostrarOpciones(){
	document.getElementById("opcionesBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
}

 function setNivel(unNivel, tiempo){
    nivel = unNivel;
    tiempoMustraResultados = tiempo;
    document.getElementById("nivel").innerHTML = nivel;
    if(tiempo === 45000){
        cantidadCir = 9;
    }
	if(tiempo === 90000){
        cantidadCir = 18;
    }
    if(tiempo === 120000){
        cantidadCir = 24;
    }
 }

function numeroAleatoreo(lista){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*lista.length));
    return aleatorio;
}
 