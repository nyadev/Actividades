/*Parametros a pasar de la actividad 8*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 8;//numero de la actividad
var verificarX = 0;
//Variables de la actividad
var lista = new Array('A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z','X','X','X','X','X');
var idElemento = 0;
var contador = 0;
var cantidadLetras = 12;
var cantidadEspacios = 0;
var msg = '';
var listaRespuestas = [];
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
    "Aparecerán letras aleatoriamente, el paciente deberá apretar la barra espaciadora con todas las letras excepto aparezca una 'X'.");
}

function validarEvento(evento){
	var codigo = evento.keyCode;
	console.log("codigo de la tecla:"+codigo);
	//Codigo 32 = barraEspaciadora
    //idElemento 21 = X
	if(codigo === 32 && cantidadEspacios === 0){
		if(idElemento === 21 || idElemento === 24 || idElemento === 25 || idElemento === 26 || idElemento === 27|| idElemento === 28){
			swal('Error');
			errores++;    
			document.getElementById("errores").innerHTML = errores;	
			cantidadEspacios = 1;		
		}
		else{
			aciertos++;
			document.getElementById("aciertos").innerHTML = aciertos; 
			cantidadEspacios = 1;
		}
	}		
}

function iniciarSecuencia(){
	listaRespuestas = [];
	mostrarEstimulo();
	retardo = setInterval(function(){mostrarlista();},tiempoLetra);//5000 son 5s que se muestra una letra
}

function iniciarEjercicio(){
    idElemento = 0;
	aciertos = 0;
	errores = 0;
    contador = 0;
	cantidadEspacios = 0;
	verificarX = 0;
	listaRespuestas = [];
    document.getElementById("estimulo").innerHTML = "";
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    document.addEventListener("keydown", validarEvento);
    iniciarSecuencia();
}

function mostrarlista(){
	if(listaRespuestas.length === 6 && verificarX === 0){
		for(i = 0; i < 5; i++){
			if(listaRespuestas[i] === 21){
				verificarX++;
			}
		}
		if(verificarX === 0){
			idElemento = 21;
			verificarX++;
		}else{
			idElemento = numeroAleatoreo();
		}
	}else{
		idElemento = numeroAleatoreo();
	}
	listaRespuestas.push(idElemento);
    document.getElementById("estimulo").innerHTML = lista[idElemento];
    console.log(lista[idElemento]);
	cantidadEspacios = 0;
    contador++;
    console.log("contador:"+contador+"cantidadLetras:"+cantidadLetras+"tiempo de cambio:"+tiempoLetra);
    if(cantidadLetras === contador){
		finalizarActividad();
    }
}

function finalizarActividad(){
	document.removeEventListener("keydown", validarEvento);
    console.log("Paramos");
    clearInterval(retardo);
    mostrarResultados();
	cantidadEspacios = 1;
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
 
 function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
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
