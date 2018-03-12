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
	if(cantidadDeEspacios ===0 && codigo === 32){
		if(idElemento === 18 || idElemento === 3 || idElemento === 1 || idElemento === 6 || idElemento === 9 || idElemento ===   14){
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
}


function iniciarSecuencia(){
	mostrarEstimulo();
	retardo=setInterval(function(){mostrarlista();},tiempoLetra);//5000 son 5s que se muestra una letra
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
