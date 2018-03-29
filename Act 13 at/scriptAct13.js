/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 9;//numero de la actividad

//Variables de la actividad
var listaCuadros = [document.getElementById("E0"), document.getElementById("E1"), document.getElementById("E2"), document.getElementById("E3"), 
					document.getElementById("E4"), document.getElementById("E5"), document.getElementById("E6"), document.getElementById("E7"),
					document.getElementById("E8")];
var listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var idElemento = 0;
var radioBotones = document.getElementsByName("niveles");
var resultado = nivel;
var numMaximo = nivel+1;//Es la cantidad de numeros que apareceran, por defaul se establecen 2, posteriormente este numero se modifica de acuerdo al nivel
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada numero
var retardoOpciones = 3000;//El tiempo que tarda en mostrar las opciones

function Instrucciones(){ 
   swal("Instrucciones",
    "Aparecerán números del 1 al 9 aleatoriamente durante un segundo cada uno, después, aparecerá una pantalla con números donde el paciente deberá dar click en el orden inverso al que aparecieron los estímulos.");
}

function mezclar(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function mostrarNumero(unLimite){
    document.getElementById("estimulo").innerHTML = listaNumeros[idElemento];
    console.log(listaNumeros[idElemento]);
    idElemento++;
    if(idElemento === unLimite){
        console.log("tenemos que parar");
        clearInterval(retardo);
    }
}
 
function validarRespuesta(opcion){
    if(listaNumeros[resultado] === opcion){
        aciertos++;
        console.log("En lista:" + listaNumeros[resultado] + " mi opcion:" + opcion  + "Numero de aciertos:" + aciertos);
		document.getElementById("pista1").currentTime = 0;
        document.getElementById("pista1").play();
        document.getElementById("aciertos").innerHTML = aciertos;
		resultado--;
    }
    else{
		swal('Error');
        errores++;
        console.log("En lista:" + listaNumeros[resultado] +" mi opcion:" +opcion + "Numero de ERROR:" + errores);
        document.getElementById("errores").innerHTML = errores;
        document.getElementById("pista2").play();
    }
    if(nivel === 1){
        if(aciertos === 2 || errores === 4){
            mostrarResultados();
        }
    }
    if(nivel === 2){
        if(aciertos === 3 || errores === 5){
            mostrarResultados();
        }
    }
    if(nivel === 3){
        if(aciertos === 4 || errores === 6){
            mostrarResultados();
        }
    }
    if(nivel === 4){
        if(aciertos === 5 || errores === 6){
            mostrarResultados();
        }
    }
    if(nivel === 5){
        if(aciertos === 6 || errores === 6){
            mostrarResultados();
        }
    }
    if(nivel === 6){
        if(aciertos === 7 || errores === 6){
            mostrarResultados();
        }
    }
    if(nivel === 7){
        if(aciertos === 8 || errores === 8){
            mostrarResultados();
        }
    }
}

function iniciarSecuencia(){
	mostrarEstimulo();	
}

function iniciarEjercicio(){
    listaNumeros = mezclar(listaNumeros);
    idElemento = 0;
	aciertos = 0;
	errores = 0;
	resultado = nivel;	
	numMaximo = nivel + 1;
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    iniciarSecuencia();
    setTimeout(function(){mostrarOpciones();},retardoOpciones);
}

function mostrarResultados(){
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.getElementById("estimulo").innerHTML = " ";
	document.getElementById("save-results").style.display = "table";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
	retardoOpciones = (nivel + 2)*1000;
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "hidden";
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
    retardo = setInterval(function(){mostrarNumero(numMaximo);},1000);
}

 function setNivel(unNivel){
    nivel = unNivel;
	retardoOpciones = (nivel + 2) * 1000;//Tiempo en milisegundos en que tarda en aparecer la capa de opciones
    document.getElementById("nivel").innerHTML = nivel;
 }
 
 function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++){
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
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