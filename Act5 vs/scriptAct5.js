/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 3;//numero de la actividad
/*Parametros de la actividad*/
var canvas1=document.getElementById('canvasEstimulo');
var canvas2=document.getElementById('canvasOpcion');

var Letra=canvas1.getContext('2d');
var figura2=canvas2.getContext('2d');


var listaLetrita = new Array('H','S');
var idLetrita;
var idLetrota;
var letrita;//Almacena la letra pequeña

//Tiempos
var tiempoEstimulo=5000;
var tiempoTotal=60000;

var retardoOpciones;
var retardo;
//Funcion para obtener el número aleatorio del color
function numeroAleatoreo(){
    var aleatorio=0;		
    aleatorio=Math.floor((Math.random()*2));//Los numeros aleatoreos varian del 0-3
    return aleatorio;
    }

// Dibujamos el primer estimulo
function dibujarLetrota(){
    //Limpiamos las areas para volver a dibujar
    Letra.clearRect(0,0,200,200);  
    idLetrota=numeroAleatoreo();
    idLetrita=numeroAleatoreo();
    
    if(idLetrota===0){ //Dibuja una S grande
            crearLetraH();
    }
        if(idLetrota===1){ //Dibuja una H grande
             crearLetraS();   
    }  
}

//crearCuadroAleatoreo1
function crearLetraS(){
   
   if(idLetrita===0){
		letrita="H";
	}
	if(idLetrita===1){
		letrita="S";
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
    if(idLetrita===0){
		letrita="H";
	}
	if(idLetrita===1){
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

    if(nivel===1){	
        if(idLetrita===0 && valor===0){
    		aciertos++;
    		document.getElementById("aciertos").innerHTML=aciertos;
            }
        if(idLetrita===1 && valor===1){
            aciertos++;
            document.getElementById("aciertos").innerHTML=aciertos;
            }

        if(idLetrita===0 && valor===1){
    		errores++;
    	alert("Error, Si hay letras H pequeñas");
    	document.getElementById("errores").innerHTML=errores;
        }

        if(idLetrita===1 && valor===0){
            errores++;
        alert("Error, No hay letras H pequeñas");
        document.getElementById("errores").innerHTML=errores;
        }
         if(aciertos===10){
               mostrarResultados();    
            }
            else{
                //Volvemos a iniciar la secuencia
            iniciarSecuencia();
            }
        }    


    if(nivel===2){  
        console.log("idLetrota: "+idLetrota+"valor enviado: "+valor);
        if(idLetrita===1 && valor===0){
            aciertos++;
            document.getElementById("aciertos").innerHTML=aciertos;
            }
        if(idLetrita===0 && valor===1){
            aciertos++;
            document.getElementById("aciertos").innerHTML=aciertos;
            }

        if(idLetrita===1 && valor===1){
            errores++;
        alert("Error, Si hay letras S pequeñas");
        document.getElementById("errores").innerHTML=errores;
        }

        if(idLetrita===0 && valor===0){
            errores++;
        alert("Error, Debes Elegir S pequeñas");
        document.getElementById("errores").innerHTML=errores;
        }
         if(aciertos===10){
               mostrarResultados();    
            }
            else{
            //Volevmos a iniciar la secuencia
            console.log("Estamos iniciando nueva secuencia en nivel 2")
            iniciarSecuencia();
            }
        }    
}

function instrucciones(){
    
      swal(
      "Instrucciones",
     " Aparece una letra grande (H o S) conformada por otras más pequeñas (H o S), el objetivo es identificar la mayor cantidad de letras pequeñas (H o S) indicada antes de iniciar la actividad, haciendo click en el boton 'Corrrecto' de lo contrario dar click en el boton 'Incorrecto'. “Deberás hacer click en 'Correcto' cada que aparezca una H pequeñas sin importar las letras grandes que lo conforman"
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
	document.getElementById("resultadosBox").style.visibility="visible";
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
    dibujarLetrota();
}

 function setNivel(unNivel){
     if(unNivel===1){
        nivel=unNivel;
        tiempoEstimulo=5000;
        tiempoTotal=60000;
        nivel=1;
    }
    if(unNivel===2){
        nivel=unNivel;
        tiempoEstimulo=5000;
        tiempoTotal=60000;
        nivel=2;
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