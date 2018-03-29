var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var canvas4 = document.getElementById('canvas4');
var canvas5 = document.getElementById('canvas5');
var canvas6 = document.getElementById('canvas6');
var cuadro1 = canvas1.getContext('2d');
var circulo1 = canvas2.getContext('2d');
var circulo2 = canvas3.getContext('2d');
var circulo3 = canvas4.getContext('2d');
var circulo4 = canvas5.getContext('2d');
var circulo5 = canvas6.getContext('2d');
var circulo6 = canvas7.getContext('2d');

var color = new Array('red','black','blue','green','purple','yellow'); 
var idColor = 10;
var aciertos = 0;
var errores = 0;

var radioBotones = document.getElementsByName("niveles");
var inicio = document.getElementById("comienzo");

// Dibujamos los circulos con cada uno de los colores
circulo1.fillStyle = color[0];
circulo1.beginPath();
circulo1.arc(50,50,45,0,Math.PI*2,true);
circulo1.closePath();
circulo1.fill();

circulo2.fillStyle = color[1];
circulo2.beginPath();
circulo2.arc(50,50,45,0,Math.PI*2,true);
circulo2.closePath();
circulo2.fill();

circulo3.fillStyle = color[2];
circulo3.beginPath();
circulo3.arc(50,50,45,0,Math.PI*2,true);
circulo3.closePath();
circulo3.fill();

circulo4.fillStyle = color[3];
circulo4.beginPath();
circulo4.arc(50,50,45,0,Math.PI*2,true);
circulo4.closePath();
circulo4.fill();

circulo5.fillStyle = color[4];
circulo5.beginPath();
circulo5.arc(50,50,45,0,Math.PI*2,true);
circulo5.closePath();
circulo5.fill();

circulo6.fillStyle = color[5];
circulo6.beginPath();
circulo6.arc(50,50,45,0,Math.PI*2,true);
circulo6.closePath();
circulo6.fill();

//Tiempos
var tiempoTotal = 60000;
var tiempoEstimulo = 5000;
var retardoResultados;
var retardoOpciones;

function setNivel(unNivel){
	document.getElementById("nivel").innerHTML = unNivel;
     if(unNivel === 1){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
    }
    if(unNivel === 2){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 120000;
    }
    if(unNivel === 3){
        nivel = unNivel;
        tiempoEstimulo = 3000;
        tiempoTotal = 180000;
    }
    if(unNivel === 4){
        nivel = unNivel;
        tiempoEstimulo = 2000;
        tiempoTotal = 240000;
    }
    if(unNivel === 5){
        nivel = unNivel;
        tiempoEstimulo = 1000;
        tiempoTotal = 300000;
    }
 }
//Funcion para obtener el número aleatorio
function numeroAleatoreo(){
    var aleatorio = 0;		
    aleatorio = Math.floor((Math.random()*color.length));
    return aleatorio;
}

// Dibujamos el primer rectangulo
function crearCuadro(){
	retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
	idColor = numeroAleatoreo();
	cuadro1.fillStyle = color[idColor];
	cuadro1.fillRect(5,5,100,100); //(pos X, pos Y, Ancho, Alto)
}

function validarRespuesta(opcion){
	if(opcion === idColor){
		aciertos++;
		document.getElementById("aciertos").innerHTML = aciertos;
		mostrarEstimulo();
		crearCuadro();
	}
	else{
		errores++;
		swal('Error');
		document.getElementById("errores").innerHTML = errores;
		mostrarEstimulo();
		crearCuadro();
	}
}

function iniciarSecuencia(){
	mostrarEstimulo();
	crearCuadro();
}

function instrucciones(){
  swal("Instrucciones","Aparecerá un estímulo en el centro de un color determinado, después en otra pantalla el niño deberá escoger el círculo que corresponde con el color mostrado.");
}

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados()},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	//swal();
	inicio.style.visibility = "hidden"; 
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("save-results").style.display = "none";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
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
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "hidden"
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
	inicio.style.visibility = "visible"; 
    return;
}

 

