/*Parametros a pasar de la actividad 6*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 6;//numero de la actividad

//Variables de la actividad
var lista = new Array('A','X','D','X','G','H','X','J','L','X','N','O','P','Q','X','T','V','W','X','Y','Z');
var idElemento = 0;
var contador = 0;
var cantidadLetras = 12;
var cantidadDeEspacios = 0;
var msg = '';
var radioBotones = document.getElementsByName("niveles");
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada letra.
var tiempoMustraResultados = 60000;//Tiempo que tarda para mostrar los resultados.
var tiempoLetra = 5000;//Tiempo para que cambie de una letra a otra.

//Funcion para obtener el número aleatorio
function numeroAleatoreo(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*lista.length));
    return aleatorio;
}

function Instrucciones(){
   swal("Instrucciones",
    "Aparecerán letras aleatoriamente, el paciente deberá apretar la barra espaciadora cada vez que aparezca la letra “X”.");
}

function mostrarlista(){
    idElemento = numeroAleatoreo();
    document.getElementById("estimulo").innerHTML=lista[idElemento];
    console.log(lista[idElemento]);
    contador++;
	cantidadDeEspacios = 0;
    console.log("contador:"+contador+"cantidadLetras:"+cantidadLetras+"tiempo de cambio:"+tiempoLetra);
    if(cantidadLetras === contador){
        console.log("Paramos");
        clearInterval(retardo);
        mostrarResultados();
    }
}

function validarEvento(evento){
	var codigo = evento.keyCode;
	console.log("codigo de la tecla:"+codigo);
	//Codigo 32 = barraEspaciadora
    //idElemento 21 = X
	if(cantidadDeEspacios === 0 && codigo === 32){
		if(idElemento === 18 || idElemento === 3 || idElemento === 1 || idElemento === 6 || idElemento === 9 || idElemento === 14){
			aciertos++;
			cantidadDeEspacios = 1;
			document.getElementById("aciertos").innerHTML = aciertos;			
		}
		else{
			swal('Error');
			errores++;
			cantidadDeEspacios = 1;		
			document.getElementById("errores").innerHTML = errores;	
		}	
	}		
}

function iniciarSecuencia(){
	mostrarEstimulo();
	retardo = setInterval(function(){mostrarlista();},tiempoLetra);//5000 son 5s que se muestra una letra
}

function iniciarEjercicio(){
    idElemento = 0;
	aciertos = 0;
	errores = 0;
    contador = 0;
    document.getElementById("estimulo").innerHTML = "";
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    document.addEventListener("keydown", validarEvento);
    iniciarSecuencia();
}

function teclado(datos){
    //console.log(datos); Muestra todos las propiedades de la tecla apretada 
}

function mostrarResultados(){
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
	document.getElementById("resultadosBox").style.visibility = "hidden";
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
}

function setNivel(unNivel, tiempo){
    nivel = unNivel;
    tiempoMustraResultados = tiempo;
    document.getElementById("nivel").innerHTML = nivel;
    if(tiempo === 60000){
        cantidadLetras = 12;
        tiempoLetra = 5000;
    }
    if(tiempo === 120000){
        cantidadLetras = 24;
        tiempoLetra = 5000;
    }
    if(tiempo === 180000){
        cantidadLetras = 60;
        tiempoLetra = 3000;
    }
    if(tiempo === 240000){
        cantidadLetras = 120;
        tiempoLetra = 2000;
    }
    if(tiempo === 300000){
        cantidadLetras = 300;
        tiempoLetra = 1000;
    }
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
    return;
}
