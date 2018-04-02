/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 3;//numero de la actividad
/*Parametros de la actividad*/
var canvas1 = document.getElementById('canvasEstimulo');
var radioBotones = document.getElementsByName("niveles");
var botonesBienMal = [document.getElementById('btnCorrecto'), document.getElementById('btnIncorrecto')];
var Letra = canvas1.getContext('2d');
var listaLetrita = new Array('H','S');
var idLetrita;
var idLetrota;
var letrita;//Almacena la letra pequeña

//Tiempos
var tiempoEstimulo = 5000;
var tiempoTotal = 60000;
var retardoOpciones;
var retardo;
//Funcion para obtener el número aleatorio del color
function numeroAleatoreo(){
    var aleatorio = 0;		
    aleatorio = Math.floor((Math.random()*2));//Los numeros aleatoreos varian del 0-3
    return aleatorio;
}

// Dibujamos el primer estimulo
function dibujarLetrota(){
    //Limpiamos las areas para volver a dibujar
    Letra.clearRect(0,0,200,200);  
    idLetrota = numeroAleatoreo();
    idLetrita = numeroAleatoreo();
    if(idLetrota === 0){ //Dibuja una S grande
            crearLetraH();
    }
    if(idLetrota === 1){ //Dibuja una H grande
		crearLetraS();   
    }  
}

//crearCuadroAleatoreo1
function crearLetraS(){
   if(idLetrita === 0){
		letrita = "H";
	}
	if(idLetrita === 1){
		letrita ="S";
	} 
    Letra.font = "bold 20px sans-serif";
	console.log("Put a message here.");
	Letra.fillText(letrita+" "+letrita,75,15,500);
	Letra.fillText(letrita+"       "+letrita,58,25,200);
    Letra.fillText(letrita,58,45,200);
    Letra.fillText(letrita+" "+letrita,75,57,200);
    Letra.fillText(letrita,110,68,200);
    Letra.fillText(letrita+"       "+letrita,58,89,200);
    Letra.fillText(letrita+" "+letrita,73,100,200);
    mostrarOpciones();
}

function crearLetraH(){ //Nivel 1
    if(idLetrita === 0){
		letrita="H";
	}
	if(idLetrita === 1){
		letrita="S";
	}
	console.log("Put a message here.");
    Letra.font = "bold 20px sans-serif";
    Letra.fillText(letrita+"       \n"+letrita,58,15,200);
    Letra.fillText(letrita+"       \n"+letrita,58,36,200);
    Letra.fillText(letrita+" "+letrita+" "+letrita+" "+letrita,58,57,200);
    Letra.fillText(letrita+"       \n"+letrita,58,78,200);
    Letra.fillText(letrita+"       \n"+letrita,58,99,200);
    mostrarOpciones();
	}

function validarIguales(valor){
    if(nivel === 1){	
        if(idLetrota === 0 && valor === 0){
    		aciertos++;
			document.getElementById("aciertos").innerHTML = aciertos;
        }
        if(idLetrota === 1 && valor === 1){
            aciertos++;
            document.getElementById("aciertos").innerHTML = aciertos;
        }
        if(idLetrota === 0 && valor === 1){
    		errores++;
			swal("Error la Letra es una H  grande");
			document.getElementById("errores").innerHTML = errores;
        }
        if(idLetrota === 1 && valor === 0){
            errores++;
			swal("Error la Letra es una S grande");
			document.getElementById("errores").innerHTML=errores;
        }
        if(aciertos === 10){
               mostrarResultados();    
        }else{
                //Volevmos a iniciar la secuencia
            iniciarSecuencia();
        }
    }    
    if(nivel === 2){  
        console.log("idLetrota: "+idLetrota+"valor enviado: "+valor);
        if(idLetrota === 1 && valor === 0){
            aciertos++;
            document.getElementById("aciertos").innerHTML=aciertos;
        }
        if(idLetrota === 0 && valor === 1){
            aciertos++;
            document.getElementById("aciertos").innerHTML=aciertos;
        }
        if(idLetrota === 1 && valor === 1){
            errores++;
			swal("Error, Has indicado que no es una S, cuando si lo es");
			document.getElementById("errores").innerHTML=errores;
        }
        if(idLetrota === 0 && valor === 0){
            errores++;
			swal("Error, Debes Elegir S grande");
			document.getElementById("errores").innerHTML=errores;
        }
        if(aciertos === 10){
               mostrarResultados();    
        }else{
                //Volevmos a iniciar la secuencia
            iniciarSecuencia();
        }
    }    
}

function instrucciones(){
    swal(
    "Instrucciones",
    "Aparece una letra grande (H o S) conformada por otras más pequeñas (H o S), el objetivo es identificar la mayor cantidad de letras grandes (H o S) indicada antes de iniciar la actividad, haciendo click en el botón 'Correcto' de lo contrario dar click en el botón 'Incorrecto'.",
    );
}

function iniciarSecuencia(){
    mostrarEstimulo();	
}

function iniciarEjercicio(){
	retardo=setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos=0;
	errores=0;
	document.getElementById("aciertos").innerHTML=aciertos;
	document.getElementById("errores").innerHTML=errores;
}

function mostrarResultados(){
	clearInterval(retardoOpciones);
	document.getElementById("estimuloBox").style.visibility="hidden";
	document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.getElementById("save-results").style.display = "table";
	botonesBienMal[0].style.display = "none";
	botonesBienMal[1].style.display = "none";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility="visible";
	document.getElementById("opcionesBox").style.visibility="visible";
	document.getElementById("resultadosBox").style.visibility="hidden";
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility="visible";
	document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility="hidden";
	botonesBienMal[0].style.display = "inline";
	botonesBienMal[1].style.display = "inline";
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i < radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
    dibujarLetrota();
}

 function setNivel(unNivel){ 
    nivel = unNivel;
	document.getElementById("nivel").innerHTML = nivel;
    if(unNivel === 1){
        tiempoEstimulo=5000;
        tiempoTotal=60000;
    }
    if(unNivel === 2){
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
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
	errores = 0;
	aciertos = 0;
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
	document.getElementById("comienzo").style.visibility = "visible"; 
	for(var i = 0; i < radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
    return;
}