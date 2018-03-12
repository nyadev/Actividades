/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 3;//numero de la actividad

//Variables de la actividad
var listaNumeros=new Array(1,2,3,4,5,6,7,8,9);
var idElemento=0;
var numMaximo=2;//Es la cantidad de numeros que apareceran, por defaul se establecen 2, posteriormente este numero se modifica de acuerdo al nivel
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada numero
var retardoOpciones=3000;//El tiempo que tarda en mostrar las opciones

function mezclar(bar){
   var m= bar.length-1;
   for (var i=m;i>1;i--){ 
      alea=Math.floor(i*Math.random()); 
      temp=bar[i]; 
       bar[i]=bar[alea]; 
       bar[alea]=temp; 
    }
   return(bar);
}


function mostrarNumero(unLimite){
    document.getElementById("estimulo").innerHTML=listaNumeros[idElemento];
    console.log(listaNumeros[idElemento]);
    idElemento++;
    if(idElemento===unLimite){
        console.log("tenemos que parar");
        clearInterval(retardo);

    }

}
var noClick=-1;
function validar(opcion){
    noClick++;

    if(listaNumeros[noClick]===opcion){
        aciertos++;
        console.log("En lista:"+listaNumeros[noClick]+" mi opcion:"+opcion + "Numero de aciertos:"+aciertos);
        document.getElementById("aciertos").innerHTML=aciertos;
    }
    else{
        errores++;
        console.log("En lista:"+listaNumeros[noClick]+" mi opcion:"+opcion + "Numero de ERROR:"+errores);
        document.getElementById("errores").innerHTML=errores;
        alert("ERROR");
    }
    if(nivel==1){
        if(aciertos===2||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==2){
        if(aciertos===3||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==3){
        if(aciertos===4||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==4){
        if(aciertos===5||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==5){
        if(aciertos===6||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==6){
        if(aciertos===7||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==7){
        if(aciertos===8||errores===2){
            mostrarResultados();
        }
    }
    if(nivel==8){
        if(aciertos===9||errores===2){
            mostrarResultados();
        }
    }
}

function iniciarSecuencia(){
	mostrarEstimulo();
	
}

function instrucciones(){
      swal(
     "Instrucciones",
  "Procedimiento: Aparecerán números del 1 al 9 aleatoriamente en la pantalla con duración de un segundo, después de ciertos estímulos aparecerá una pantalla con los números del 1 al 9 y el paciente deberá dar click en el orden en él que aparecieron los estímulos, tendrá dos intentos para realizarlos correctamente.",
);
}

function iniciarEjercicio(){
    listaNumeros=mezclar(listaNumeros);
    idElemento=0;
	aciertos=0;
	errores=0;
    noClick=-1;
    document.getElementById("estimulo").innerHTML="";
	document.getElementById("aciertos").innerHTML=aciertos;
	document.getElementById("errores").innerHTML=errores;
    iniciarSecuencia();
    setTimeout(function(){mostrarOpciones();},retardoOpciones);
}

function mostrarResultados(){
	document.getElementById("estimuloBox").style.visibility="hidden";
	document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility="visible";
}
function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility="hidden";
	document.getElementById("opcionesBox").style.visibility="visible";
	document.getElementById("resultadosBox").style.visibility="hidden";

}
function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility="visible";
	document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility="hidden";
    retardo=setInterval(function(){mostrarNumero(numMaximo);},1000);
   
}

 function setNivel(unNivel, tiempo,numeroLimite){
    numMaximo=numeroLimite;
    nivel=unNivel;
    retardoOpciones=tiempo;//Tiempo en milisegundos en que tarda en aprarecer la capa de opciones
    document.getElementById("nivel").innerHTML=nivel;
 }
 
 function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
}
