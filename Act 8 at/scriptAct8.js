/*Parametros a pasar de la actividad 8*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 8;//numero de la actividad
var verificarX = 0;

//Variables de la actividad
var lista = new Array('A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z');
var idElemento = 0;
var contador = 0;
var cantidadLetras = 12;
var cantidadEspacios = 0;
var msg='';
var listaRespuestas = [];
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada letra.
var tiempoMustraResultados=60000;//Tiempo que tarda para mostrar los resultados.
var tiempoLetra=5000;//Tiempo para que cambie de una letra a otra.

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
	if(codigo === 32){
		if(idElemento === 21 || cantidadEspacios === 1){
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
	listaRespuestas =[];
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
