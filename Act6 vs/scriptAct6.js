/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 3;//numero de la actividad
/*Parametros de la actividad*/
var canvas1 = document.getElementById('canvasEstimulo');
var Letra = canvas1.getContext('2d');
var radioBotones = document.getElementsByName("niveles");
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
		letrita = "S";
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
 //código de letras  0=H    1=S               
function crearLetraH(){ //Nivel 1
    if(idLetrita === 0){
		letrita = "H";
	}
	if(idLetrita === 1){
		letrita = "S";
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
        if(valor === 0){
            if(idLetrita === 0){
                if(idLetrota === 0){
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }else{
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }
            }
            if(idLetrita === 1){
                if(idLetrota === 0){
                   aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos; 
                }else{
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }  
            }
        }
        if(valor === 1){
            if(idLetrita === 0){
                if(idLetrota === 0){
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }else{
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }
            }
            if(idLetrita === 1){
                if(idLetrota === 0){
					swal('Error');
					errores++;
                    document.getElementById("errores").innerHTML = errores; 
                }else{
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }  
            }
        }
    }
    if(nivel === 2){
        if(valor === 0){
            if(idLetrita === 0){
                if(idLetrota === 0){
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }else{
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }
            }
            if(idLetrita === 1){
                if(idLetrota === 0){
                   aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos; 
                }else{
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }  
            }
        }
        if(valor === 1){
            if(idLetrita === 0){
                if(idLetrota === 0){
                    aciertos++;
                    document.getElementById("aciertos").innerHTML = aciertos;
                }else{
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }
            }
            if(idLetrita === 1){
                if(idLetrota === 0){
					swal('Error');
					errores++;
                    document.getElementById("errores").innerHTML = errores; 
                }else{
					swal('Error');
                    errores++;
                    document.getElementById("errores").innerHTML = errores;
                }  
            }
        }
    }
    //BLOQUE PARA VALIDAR "S", NIVEL 2
    if(aciertos === 10){
        mostrarResultados();    
    }
    else{
    //Volevmos a iniciar la secuencia
    console.log("Estamos iniciando nueva secuencia en nivel 2")
    iniciarSecuencia();
    }         
}

function iniciarSecuencia(){
    mostrarEstimulo();
}

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";
}

function mostrarResultados(){
	clearInterval(retardoOpciones);
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
	document.getElementById("save-results").style.display = "table";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
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
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
    }else
    if(unNivel === 2){
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
    }
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
 
 function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
}

function Instrucciones(){
   swal("Instrucciones",
    "Aparece una letra grande (H o S) conformada por otras más pequeñas (H o S), el objetivo es identificar la mayor cantidad de letras grandes o pequeñas (H o S) indicada antes de iniciar la actividad, haciendo click en el boton 'Corrrecto' de lo contrario dar click en el boton 'Incorrecto'.");
}