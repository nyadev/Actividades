/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var fase = 1;
var actividad = 9;//numero de la actividad
//Variables de la actividad
var noClick = 0;
var listaNumeros = ['E3','E4'];
var listaCuadros = [document.getElementById("E0"), document.getElementById("E1"), document.getElementById("E2"), document.getElementById("E3"), 
					document.getElementById("E4"), document.getElementById("E5"), document.getElementById("E6"), document.getElementById("E7"),
					document.getElementById("E8")];
var listaCuadros2 = [document.getElementById("E9"), document.getElementById("E10"), document.getElementById("E11"), 
					document.getElementById("E12"), document.getElementById("E13"), document.getElementById("E14"), 
					document.getElementById("E15"), document.getElementById("E16"), document.getElementById("E17")];
var idElemento = 0;
var radioBotones = document.getElementsByName("niveles");
var radioBotones2 = document.getElementsByName("fases");
var numMaximo = 2;//Es la cantidad de numeros que apareceran, por defaul se establecen 2, posteriormente este numero se modifica de acuerdo al nivel
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada numero
var retardoOpciones = 2000;//El tiempo que tarda en mostrar las opciones

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

function Instrucciones(){
    swal(
    "Instrucciones",
    "Aparecerá una tabla en la cual aparecerá un círculo, el niño deberá escoger la coordenada donde apareció el círculo.",
        );
	setNivel(1,2000,1);
}

// Dibujamos el primer rectangulo
function mostrarCuadros(unLimite){
document.getElementById(listaNumeros[idElemento]).style.background = 'rgb(34, 222, 247)';
    idElemento++;
    if(idElemento === unLimite){
        console.log("tenemos que parar");
        clearInterval(retardo);
    }
}

function setFase(unaFase){
	fase = unaFase;
	document.getElementById("fase").innerHTML = fase;
	evaluarFase();
}

function evaluarFase(){
	if (fase === 1){
		for(i = 0; i < listaCuadros.length; i++){
			listaCuadros[i].innerHTML = i+1;
			listaCuadros2[i].innerHTML = i+1;
		}
	}
	if(fase === 2){
		for(i = 0; i < listaCuadros.length; i++){
			listaCuadros[i].innerHTML = "";
			listaCuadros2[i].innerHTML = "";
		}
	}
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
    if(listaNumeros[noClick] === opcion){
        aciertos++;
        console.log("En lista:"+listaNumeros[noClick]+" mi opcion:"+ opcion + "Numero de aciertos:"+aciertos);
        document.getElementById("aciertos").innerHTML = aciertos;
		noClick++;
    }
    else{
        errores++;
        console.log("En lista:"+listaNumeros[noClick]+" mi opcion:"+ opcion + "Numero de ERROR:"+errores);
        document.getElementById("errores").innerHTML = errores;
        swal("Error");
    }
    if(nivel === 1){
        if(aciertos === 1 || errores === 2){
            mostrarResultados();
        }
    }
    if(nivel === 2){
        if(aciertos === 2 || errores === 2){
            mostrarResultados();
        }
    }
    if(nivel === 3){
        if(aciertos === 1 || errores === 1){
            mostrarResultados();
        }
    }
    if(nivel === 4){
        if(aciertos === 2 || errores === 2){
            mostrarResultados();
        }
    }
    if(nivel === 5){
        if(aciertos === 3 || errores === 3){
            mostrarResultados();
        }
    }
    if(nivel === 6){
        if(aciertos === 1 || errores === 1){
            mostrarResultados();
        }
    }
    if(nivel === 7){
        if(aciertos === 2 || errores === 2){
            mostrarResultados();
        }
    }
    if(nivel === 8){
        if(aciertos === 3 || errores === 3){
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
    noClick = 0;
    for(var i = 0; i < 9; i++){
    listaCuadros[i].style.background = "white";    
    }
    //document.getElementById("estimulo").innerHTML="";
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    iniciarSecuencia();
    setTimeout(function(){mostrarOpciones();},retardoOpciones);
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
    retardo = setInterval(function(){mostrarCuadros(numMaximo);},1000);
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
	for(var i = 0; i<radioBotones2.length; i++){
		radioBotones2[i].disabled = true;
	}
}

 function setNivel(unNivel,tiempo,numeroLimite){
    numMaximo = numeroLimite;
    nivel = unNivel;
    retardoOpciones = tiempo;//Tiempo en milisegundos en que tarda en aprarecer la capa de opciones
    document.getElementById("nivel").innerHTML = nivel;
	for(i = 0; i < listaCuadros.length; i++){
		listaCuadros[i].style.border = "none";
		listaCuadros2[i].style.border = "none";
	}
    if(nivel === 1 || nivel === 2){
		listaCuadros[3].style.border = "2px solid black";
		listaCuadros[4].style.border = "2px solid black";
		listaCuadros2[3].style.border = "2px solid black";
		listaCuadros2[4].style.border = "2px solid black";
		listaNumeros = ['E3','E4'];
    }
    if(nivel === 3 || nivel === 4 || nivel === 5){
        for(i = 3; i < listaCuadros.length; i++){
			listaCuadros[i].style.border = "2px solid black";
			listaCuadros2[i].style.border = "2px solid black";
		}
		listaNumeros = ['E3','E4','E5','E6','E7','E8'];
    }
    if(nivel === 6 || nivel === 7 || nivel === 8){
		for(i = 0; i < listaCuadros.length; i++){
			listaCuadros[i].style.border = "2px solid black";
			listaCuadros2[i].style.border = "2px solid black";			
		}
		listaNumeros = ['E0','E1','E2','E3','E4','E5','E6','E7','E8'];
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
	for(var i = 0; i<radioBotones2.length; i++){
		radioBotones2[i].disabled = false;
	}
    return;
}