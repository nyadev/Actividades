var canvasFijo = document.getElementById('figuraFija');
var canvasFigura1 = document.getElementById('canvasOpcion1');
var canvasFigura2 = document.getElementById('canvasOpcion2');
var canvasFigura3 = document.getElementById('canvasOpcion3');
var canvasFigura4 = document.getElementById('canvasOpcion4');
var canvasFigura5 = document.getElementById('canvasOpcion5');
var figuraFija = canvasFijo.getContext('2d');
var figuraOpcion1 = canvasFigura1.getContext('2d');
var figuraOpcion2 = canvasFigura2.getContext('2d');
var figuraOpcion3 = canvasFigura3.getContext('2d');
var figuraOpcion4 = canvasFigura4.getContext('2d');
var figuraOpcion5 = canvasFigura5.getContext('2d');
var color = ['rgb(255, 0, 0)', 'rgb(106, 43, 255)', 'rgb(40, 249, 29)', 'rgb(87, 193, 249)', 'rgb(255, 0, 191)', 'rgb(0, 109, 104)', 'rgb(242, 255, 0)'];
var figura = ['cuadro','circulo','triangulo']; 
var posiciones = [1, 2, 3, 4, 5];
var posicionResultado = 0;
var idColor1;
var idColor;
var idFig1;
var idFig;
//var idResultado = 0;
var idRespuestasColor = [ ];
var idRespuestasForma = [ ];
var tiempoEstimulo = 10;
var tiempoTotal = 60000;
var retardoOpciones;
var retardo;

function numeroAleatoreoPosicion(){
	var aleatorio = 0;
	var idAleatorio = 0;
	idAleatorio = Math.floor((Math.random()*posiciones.length));
	aleatorio = posiciones[idAleatorio];
	return aleatorio;
}

function numeroAleatoreoColor(evaluacion){
	var aleatorio = 0;		
	var valorTemporal = 0;
	var pasar = 1;
		if(evaluacion === 0){
			aleatorio = Math.floor((Math.random()*color.length));
		}
		else{
			if(idRespuestasColor.length > 0){
				do{
					pasar = 1;
					valorTemporal = Math.floor((Math.random()*color.length));
					for(i = 0; i < idRespuestasColor.length; i++){
						if(idFig === idRespuestasForma[i] && valorTemporal === idRespuestasColor[i] || idFig === idFig1 && valorTemporal === idColor1){
							pasar = 0;
							console.log("forma : "+ idRespuestasForma[i] +" color : " + idRespuestasColor[i]);
						}
					}	
				}
				while(pasar === 0);	
				aleatorio = valorTemporal;
			}
			else{
				do{
					valorTemporal = Math.floor((Math.random()*color.length));
				}
				while(idFig === idFig1 && valorTemporal === idColor1);
				aleatorio = valorTemporal;
			}
		}
	return aleatorio;
}
   
function numeroAleatoreoFigura(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*figura.length));
    return aleatorio;
}

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	idRespuestasColor = [ ];
	idRespuestasForma = [ ];
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
}

function iniciarSecuencia(){
	idRespuestasColor = [ ];
	idRespuestasForma = [ ];
	mostrarEstimulo();
}

function mostrarResultados(){
	clearInterval(retardoOpciones);
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.getElementById("save-results").style.display = "table";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
    dibujarFigura2(1);
	dibujarFigura2(2);
	dibujarFigura2(3);
	dibujarFigura2(4);
	dibujarFigura2(5);
}

function mostrarEstimulo(){
	document.getElementById("comienzo").style.visibility = "hidden";
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "hidden";
    dibujarFigura1();
}

function dibujarFigura1(){
    figuraFija.clearRect(0,0,200,200);  
	posicionResultado = numeroAleatoreoPosicion();
    idFig1 = numeroAleatoreoFigura();
    console.log("id de la figura 1: "+figura[idFig1]);
    if(idFig1 === 0){
        crearCuadroAleatorio1();
    }
    if(idFig1 === 1){
         crearCirculoAleatorio1();   
    }
    if(idFig1 === 2){
        crearTrianguloAleatorio1();
	}
}

function crearCuadroAleatorio1(){
    retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
    idColor1 = numeroAleatoreoColor(0);
    console.log("color: " + color[idColor1]);
    figuraFija.fillStyle = color[idColor1];
    figuraFija.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
}

function crearCirculoAleatorio1(){
    retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
    idColor1 = numeroAleatoreoColor(0);
    console.log("color: " + color[idColor1]);
    figuraFija.fillStyle = color[idColor1];
    figuraFija.beginPath();
    figuraFija.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
    figuraFija.closePath();
    figuraFija.fill();
}

function crearTrianguloAleatorio1(){
	retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
	idColor1 = numeroAleatoreoColor(0);
	figuraFija.fillStyle = color[idColor1];
	console.log("color: " + color[idColor1]);
	figuraFija.beginPath();
	figuraFija.moveTo(10,170);
	figuraFija.lineTo(190,170);
	figuraFija.lineTo(100,20);
	figuraFija.closePath()
	figuraFija.fill();
}

function dibujarFigura2(numFigura){
	if(posicionResultado === numFigura){
		idFig = idFig1;
		idColor = idColor1;
		idRespuestasForma.push(idFig);
		idRespuestasColor.push(idColor);
		crearFiguraResultado();
	}else{
		idFig = numeroAleatoreoFigura();
		idColor = numeroAleatoreoColor(1);
		idRespuestasForma.push(idFig);
		idRespuestasColor.push(idColor);
		console.log("ID de la figura "+ numFigura +" : " + figura[idFig]);
		if(idFig === 0){
			crearCuadroAleatoreo2(numFigura);
		}
		if(idFig === 1){
			crearCirculoAleatoreo2(numFigura);   
		}
		if(idFig === 2){
			crearTrianguloAleatoreo2(numFigura);
		}
	}	
}

function crearCuadroAleatoreo2(numFig){
	if(numFig === 1){
		figura1 = cambiarFig(numFig);
		figura1.clearRect(10,10,200,200);
		figura1.fillStyle = color[idColor];
		figura1.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
	} else if(numFig === 2){
		figura2 = cambiarFig(numFig);
		figura2.clearRect(10,10,200,200);
		figura2.fillStyle = color[idColor];
		figura2.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
	} else if(numFig === 3){
		figura3 = cambiarFig(numFig);
		figura3.clearRect(10,10,200,200);
		figura3.fillStyle = color[idColor];
		figura3.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
	} else if(numFig === 4){
		figura4 = cambiarFig(numFig);
		figura4.clearRect(10,10,200,200);
		figura4.fillStyle = color[idColor];
		figura4.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
	} else if(numFig === 5){
		figura5 = cambiarFig(numFig);
		figura5.clearRect(10,10,200,200);
		figura5.fillStyle = color[idColor];
		figura5.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
	}
} 

function crearCirculoAleatoreo2(numFig){
	if(numFig === 1){
		figura1 = cambiarFig(numFig);
		figura1.clearRect(10,10,200,200);
		figura1.fillStyle = color[idColor];
		figura1.beginPath();
		figura1.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
		figura1.closePath();
		figura1.fill();
	} else if(numFig === 2){
		figura2 = cambiarFig(numFig);
		figura2.clearRect(10,10,200,200);
		figura2.fillStyle = color[idColor];
		figura2.beginPath();
		figura2.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
		figura2.closePath();
		figura2.fill();
	} else if(numFig === 3){
		figura3 = cambiarFig(numFig);
		figura3.clearRect(10,10,200,200);
		figura3.fillStyle = color[idColor];
		figura3.beginPath();
		figura3.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
		figura3.closePath();
		figura3.fill();
	} else if(numFig === 4){
		figura4 = cambiarFig(numFig);
		figura4.clearRect(10,10,200,200);
		figura4.fillStyle = color[idColor];
		figura4.beginPath();
		figura4.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
		figura4.closePath();
		figura4.fill();
	} else if(numFig === 5){
		figura5 = cambiarFig(numFig);
		figura5.clearRect(10,10,200,200);
		figura5.fillStyle = color[idColor];
		figura5.beginPath();
		figura5.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
		figura5.closePath();
		figura5.fill();
	}
}

function crearTrianguloAleatoreo2(numFig){
	if(numFig === 1){
		figura1 = cambiarFig(numFig);
		figura1.clearRect(10,10,200,200);
		figura1.fillStyle = color[idColor];
		figura1.beginPath();
		figura1.moveTo(10,170);
		figura1.lineTo(190,170);
		figura1.lineTo(100,20);
		figura1.fill();
	} else if(numFig === 2){
		figura2 = cambiarFig(numFig);
		figura2.clearRect(10,10,200,200);
		figura2.fillStyle = color[idColor];
		figura2.beginPath();
		figura2.moveTo(10,170);
		figura2.lineTo(190,170);
		figura2.lineTo(100,20);
		figura2.fill();
	} else if(numFig === 3){
		figura3 = cambiarFig(numFig);
		figura3.clearRect(10,10,200,200);
		figura3.fillStyle = color[idColor];
		figura3.beginPath();
		figura3.moveTo(10,170);
		figura3.lineTo(190,170);
		figura3.lineTo(100,20);
		figura3.fill();
	} else if(numFig === 4){
		figura4 = cambiarFig(numFig);
		figura4.clearRect(10,10,200,200);
		figura4.fillStyle = color[idColor];
		figura4.beginPath();
		figura4.moveTo(10,170);
		figura4.lineTo(190,170);
		figura4.lineTo(100,20);
		figura4.fill();
	} else if(numFig === 5){
		figura5 = cambiarFig(numFig);
		figura5.clearRect(10,10,200,200);
		figura5.fillStyle = color[idColor];
		figura5.beginPath();
		figura5.moveTo(10,170);
		figura5.lineTo(190,170);
		figura5.lineTo(100,20);
		figura5.fill();
	}
}

function crearFiguraResultado(){
	if (idFig === 0){
		if(posicionResultado === 1){
			figura1 = cambiarFig(posicionResultado);
			figura1.clearRect(10,10,200,200);
			figura1.fillStyle = color[idColor];
			figura1.fillRect(15,15,170,170);
		} else if(posicionResultado === 2){
			figura2 = cambiarFig(posicionResultado);
			figura2.clearRect(10,10,200,200);
			figura2.fillStyle = color[idColor];
			figura2.fillRect(15,15,170,170);
		} else if(posicionResultado === 3){
			figura3 = cambiarFig(posicionResultado);
			figura3.clearRect(10,10,200,200);
			figura3.fillStyle = color[idColor];
			figura3.fillRect(15,15,170,170);
		} else if(posicionResultado === 4){
			figura4 = cambiarFig(posicionResultado);
			figura4.clearRect(10,10,200,200);
			figura4.fillStyle = color[idColor];
			figura4.fillRect(15,15,170,170);
		} else if(posicionResultado === 5){
			figura5 = cambiarFig(posicionResultado);
			figura5.clearRect(10,10,200,200);
			figura5.fillStyle = color[idColor];
			figura5.fillRect(15,15,170,170);
		}
	} else if (idFig === 1){
		if(posicionResultado === 1){
			figura1 = cambiarFig(posicionResultado);
			figura1.clearRect(10,10,200,200);
			figura1.fillStyle = color[idColor];
			figura1.beginPath();
			figura1.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
			figura1.closePath();
			figura1.fill();
		} else if(posicionResultado === 2){
			figura2 = cambiarFig(posicionResultado);
			figura2.clearRect(10,10,200,200);
			figura2.fillStyle = color[idColor];
			figura2.beginPath();
			figura2.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
			figura2.closePath();
			figura2.fill();
		} else if(posicionResultado === 3){
			figura3 = cambiarFig(posicionResultado);
			figura3.clearRect(10,10,200,200);
			figura3.fillStyle = color[idColor];
			figura3.beginPath();
			figura3.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
			figura3.closePath();
			figura3.fill();
		} else if(posicionResultado === 4){
			figura4 = cambiarFig(posicionResultado);
			figura4.clearRect(10,10,200,200);
			figura4.fillStyle = color[idColor];
			figura4.beginPath();
			figura4.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
			figura4.closePath();
			figura4.fill();
		} else if(posicionResultado === 5){
			figura5 = cambiarFig(posicionResultado);
			figura5.clearRect(10,10,200,200);
			figura5.fillStyle = color[idColor];
			figura5.beginPath();
			figura5.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
			figura5.closePath();
			figura5.fill();
		}
	} else if (idFig === 2){
		if(posicionResultado === 1){
			figura1 = cambiarFig(posicionResultado);
			figura1.clearRect(10,10,200,200);
			figura1.fillStyle = color[idColor];
			figura1.beginPath();
			figura1.moveTo(10,170);
			figura1.lineTo(190,170);
			figura1.lineTo(100,20);
			figura1.fill();
		} else if(posicionResultado === 2){
			figura2 = cambiarFig(posicionResultado);
			figura2.clearRect(10,10,200,200);
			figura2.fillStyle = color[idColor];
			figura2.beginPath();
			figura2.moveTo(10,170);
			figura2.lineTo(190,170);
			figura2.lineTo(100,20);
			figura2.fill();
		} else if(posicionResultado === 3){
			figura3 = cambiarFig(posicionResultado);
			figura3.clearRect(10,10,200,200);
			figura3.fillStyle = color[idColor];
			figura3.beginPath();
			figura3.moveTo(10,170);
			figura3.lineTo(190,170);
			figura3.lineTo(100,20);
			figura3.fill();
		} else if(posicionResultado === 4){
			figura4 = cambiarFig(posicionResultado);
			figura4.clearRect(10,10,200,200);
			figura4.fillStyle = color[idColor];
			figura4.beginPath();
			figura4.moveTo(10,170);
			figura4.lineTo(190,170);
			figura4.lineTo(100,20);
			figura4.fill();
		} else if(posicionResultado === 5){
			figura5 = cambiarFig(posicionResultado);
			figura5.clearRect(10,10,200,200);
			figura5.fillStyle = color[idColor];
			figura5.beginPath();
			figura5.moveTo(10,170);
			figura5.lineTo(190,170);
			figura5.lineTo(100,20);
			figura5.fill();
		}
	}
}

function cambiarFig(i){
    var fig = null;
    switch(i) {
        case 1:
            fig = figuraOpcion1;
            return fig;
        case 2:
            fig = figuraOpcion2;
            return fig;
        case 3:
            fig = figuraOpcion3;
            return fig;
        case 4:
            fig = figuraOpcion4;
            return fig;
        case 5:
            fig = figuraOpcion5;
            return fig;
        default:
            return null;
    }
    return null;
}

function validarIguales(respuesta){
	if(respuesta === posicionResultado){
		aciertos++;
		document.getElementById("aciertos").innerHTML = aciertos;
		iniciarSecuencia();
	}
	else{
		swal('Error, las figuras no coinciden');
		errores++;
		document.getElementById("errores").innerHTML = errores;
	    iniciarSecuencia();
    }
}

function Instrucciones(){
	swal(
	"Instrucciones",
	"Aparecerán cinco figuras, el paciente deberá seleccionar la que es similar a la primera."
	);
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    document.getElementById("save-results").style.display = "none";
	document.getElementById("comienzo").style.visibility = "visible";
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
	for(var i = 0; i<radioBotones2.length; i++){
		radioBotones2[i].disabled = false;
	}
    return;
}