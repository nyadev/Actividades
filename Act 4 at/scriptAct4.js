/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 4;//numero de la actividad
/*Parametros de la actividad*/
var canvas1 = document.getElementById('canvasEstimulo');
var canvas2 = document.getElementById('canvasOpcion');
var figura1 = canvas1.getContext('2d');
var figura2 = canvas2.getContext('2d');
var color = new Array('red','blue','green','yellow');
var figura = new Array('cuadro','circulo','triangulo'); 
var idColor1;
var idColor2;
var idFig1;
var idFig2;
var inicio = document.getElementById("comienzo");
var radioBotones = document.getElementsByName("niveles");
//Tiempos
var tiempoEstimulo=5000;
var tiempoTotal=60000;
var retardoOpciones;
var retardo;

//Funcion para obtener el número aleatorio del color
function numeroAleatoreoColor(){
       var aleatorio = 0;		
      aleatorio = Math.floor((Math.random()*color.length));
      return aleatorio;
    }
//Funcion para obtener el número aleatoreo de la figura    
function numeroAleatoreoFigura(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*figura.length));
    return aleatorio;
}
// Dibujamos el primer estimulo
function dibujarFigura1(){
    //Limpiamos las areas para volver a dibujar
    figura1.clearRect(0,0,200,200);  
    idFig1 = numeroAleatoreoFigura();
    console.log("id de la figura 1:"+figura[idFig1]);
    if(idFig1 === 0){
        crearCuadroAleatoreo1();
    }
    if(idFig1 === 1){
         crearCirculoAleatoreo1();   
    }
    if(idFig1 === 2){
        crearTrianguloAleatoreo1();
    }          
}

// Dibujamos la segunda figura
function dibujarFigura2(){
  figura2.clearRect(0,0,200,200);
    idFig2 = numeroAleatoreoFigura();
    if(idFig2 === 0){
        crearCuadroAleatoreo2();
    }
    if(idFig2 === 1){
         crearCirculoAleatoreo2();   
    }
    if(idFig2 === 2){
        crearTrianguloAleatoreo2();
    }        
}

function crearCuadroAleatoreo1(){
    retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
    idColor1 = numeroAleatoreoColor();
    console.log("color: "+color[idColor1]);
    figura1.fillStyle = color[idColor1];
    figura1.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
}

 function crearCuadroAleatoreo2(){
    idColor2 = numeroAleatoreoColor();
    figura2.fillStyle = color[idColor2];
    figura2.fillRect(15,15,170,170); //(pos X, pos Y, Ancho, Alto)
}       

function crearCirculoAleatoreo1(){
    retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
    idColor1 = numeroAleatoreoColor();
    console.log("color: "+color[idColor1]);
    figura1.fillStyle = color[idColor1];
    figura1.beginPath();
    figura1.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
    figura1.closePath();
    figura1.fill();
}

function crearCirculoAleatoreo2(){
    idColor2 = numeroAleatoreoColor();
    figura2.fillStyle = color[idColor2];
    figura2.beginPath();
    figura2.arc(100,100,80,0,Math.PI*2,true); //(pos X, pos Y, radio, 0, formula, true)
    figura2.closePath();
    figura2.fill();
}

function crearTrianguloAleatoreo1(){
    retardoOpciones = setTimeout(function(){mostrarOpciones();},tiempoEstimulo);
    idColor1 = numeroAleatoreoColor();
    figura1.fillStyle = color[idColor1];
    console.log("color: "+color[idColor1]);
    figura1.beginPath();
    figura1.moveTo(10,170);
    figura1.lineTo(190,170);
    figura1.lineTo(100,20);
    figura1.closePath()
    figura1.fill();
}

function crearTrianguloAleatoreo2(){
    idColor2 = numeroAleatoreoColor();
    figura2.fillStyle = color[idColor2];
    figura2.beginPath();
    figura2.moveTo(10,170);
    figura2.lineTo(190,170);
    figura2.lineTo(100,20);
    figura2.fill();
}

function validarIguales(){
	if(idColor1 === idColor2 && idFig1 === idFig2){
		aciertos++;
		document.getElementById("aciertos").innerHTML = aciertos;
        //Volvmos a iniciar la secuencia
		iniciarSecuencia();
	}
	else{
		errores++;
		swal("Error");
		document.getElementById("errores").innerHTML = errores;
        //Volvmos a iniciar la secuencia
	    iniciarSecuencia();
    }
}

function validarDiferentes(){
    if(idColor1!=idColor2 || idFig1!=idFig2){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        iniciarSecuencia();
    }
    else{
        errores++;
		swal("Error");
		document.getElementById("errores").innerHTML = errores;
		iniciarSecuencia();
    }
}

function iniciarSecuencia(){
	inicio.style.visibility = "hidden";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
	mostrarEstimulo();
}

function instrucciones(){
    swal(
   "Instrucciones",
    "Aparecerá un estímulo en el centro de un color determinado (Rojo, Azul o Verde) y forma determinado (Cuadrado, Círculo, Triángulo), en la siguiente pantalla aparecerá una nueva figura de igual o diferente color y/o forma, el paciente deberá dar click a los botones dependiendo si es el mismo o diferente. El estímulo cambiará hasta que el paciente haya dado una respuesta.",
   );
}

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
}

function mostrarResultados(){
	clearInterval(retardoOpciones);
	document.getElementById("save-results").style.display = "table";
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "visible";
}

function mostrarOpciones(){
	document.getElementById("estimuloBox").style.visibility = "hidden";
	document.getElementById("opcionesBox").style.visibility = "visible";
	document.getElementById("resultadosBox").style.visibility = "hidden";
    dibujarFigura2();
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility = "visible";
	document.getElementById("opcionesBox").style.visibility = "hidden";
	document.getElementById("resultadosBox").style.visibility = "hidden";
    dibujarFigura1();
}

function setNivel(unNivel){
	document.getElementById("nivel").innerHTML = unNivel;
    if(unNivel === 1){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 60000;
    }
    if(unNivel === 2){
        nivel = unNivel;
        tiempoEstimulo = 5000;
        tiempoTotal = 120000;
    }
    if(unNivel === 3){
        nivel = unNivel;
        tiempoEstimulo = 3000;
        tiempoTotal = 180000;
    }
    if(unNivel === 4){
        nivel = unNivel;
        tiempoEstimulo = 2000;
        tiempoTotal = 240000;
    }
    if(unNivel === 5){
        nivel = unNivel;
        tiempoEstimulo = 1000;
        tiempoTotal = 300000;
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
	inicio.style.visibility = "visible"; 
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
    return;
}