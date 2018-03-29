/*Parametros a pasar de la actividad 15*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 15;//numero de la actividad
//Variables de la actividad
var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var idElemento = 0;
var contador = 0;
var cantidadNum = 9;
var cantidadDeEspacios = 0;
var msg;
var respuesta;
var radioBotones = document.getElementsByName("niveles");
//Tiempos
var retardo; //Variable que contiene el tiempo en que se muestra cada letra.
var tiempoMustraResultados = 45000;//Tiempo que tarda para mostrar los resultados.
var tiempoNum = 5000;//Tiempo para que cambie de una letra a otra.

//Funcion para obtener el número aleatorio
function numeroAleatoreo(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*lista.length));
    return aleatorio;
}

function Instrucciones(){
   swal("Instrucciones",
    "Aparecerán números aleatoriamente, el paciente deberá apretar la barra espaciadora cada vez que no aparezca el numero señalado.");
}

function mostrarlista(){
    idElemento = numeroAleatoreo();
	document.getElementById("respuesta").innerHTML = msg;
    document.getElementById("estimulo").innerHTML = lista[idElemento];
    console.log(lista[idElemento]);
    contador++;
	cantidadDeEspacios = 0;
    console.log("contador: " + contador + "cantidadNum: " + cantidadNum + "tiempo de cambio: " + tiempoNum);
    if(cantidadNum - 1 < contador){
        console.log("Paramos");
        clearInterval(retardo);
        mostrarResultados();
    }
}

function validarEvento(evento){
	var codigo = evento.keyCode;
	console.log("codigo de la tecla:"+codigo);
	//Codigo 32 = barraEspaciadora
	if(cantidadDeEspacios === 0 && codigo === 32){
		if( !(idElemento === respuesta)){
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
	mostrarOpciones();
	retardo = setInterval(function(){mostrarlista();},tiempoNum);//5000 son 5s que se muestra una letra
}

function iniciarEjercicio(){
	var respuestaTemporal;
    idElemento = 0;
	aciertos = 0;
	errores = 0;
    contador = 0;
	respuesta = 0;
	respuesta = lista[numeroAleatoreo(lista)];
	msg = respuesta;
    document.getElementById("estimulo").innerHTML = "";
	document.getElementById("respuesta").innerHTML = "";
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
	document.getElementById("resultadosBox").style.visibility = "visible";
	document.removeEventListener("keydown", validarEvento);
	document.getElementById("save-results").style.display = "table";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility = "visible";
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
    if(tiempo === 45000){
        cantidadNum = 9;
    }
	if(tiempo === 90000){
        cantidadNum = 18;
    }
    if(tiempo === 120000){
        cantidadNum = 24;
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
	for(var i = 0; i<radioBotones2.length; i++){
		radioBotones2[i].disabled = false;
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