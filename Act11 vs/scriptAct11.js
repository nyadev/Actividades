/*Parametros a pasar de la actividad 2*/
//var curp = document.getElementById("curpP").textContent;
var aciertos = 0;
var errores = 0;
var nivel = 1;
var actividad = 3;//numero de la actividad

/*Parametros de la actividad*/

var imagenc1;
var imagenc2;
var imagenc3;
var imagenc4;
var canvas1 = document.getElementById('micanvas');
var canvas2 = document.getElementById('micanvas2');
var canvas3 = document.getElementById('micanvas3');
var canvas4 = document.getElementById('micanvas4');
var ctx = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');
var imagen_contorno = ['images/verticales/image_1vh.png', 'images/verticales/image1_1vh.png', '1.png'];
var imagen_contorno1 = ['images/verticales/image_2vh.png', 'images/verticales/image1_2vh.png', '1.png'];
var idFig1;
var idFig2;
var idFig3;
var idFig4;
var cont = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;

//Tiempos
var tiempoEstimulo = 5000;
var tiempoTotal = 20000;
var retardoOpciones;
var retardo;

function instrucciones(){
      swal(
		"Instrucciones",
		"El paciente deberá unir las partes que complementan a la imagen.",
        );
}

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	document.getElementById("aciertos").innerHTML=aciertos;
	document.getElementById("errores").innerHTML=errores;
}

function iniciarSecuencia(){
	mostrarEstimulo();
     cont = 0;
     cont2 = 0;
     cont3 = 0;
     cont4 = 0;
	
}

function mostrarEstimulo(){
	//document.getElementById("estimuloBox").style.visibility="visible";
	//document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility="hidden";
    dibujarImagen();
    

}
//Funcion para obtener el número aleatoreo de la figura    
function numeroAleatoreoPosicion(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*3));
    return aleatorio;
}

function numeroAleatoreoFigura(num1, num2){
    var aleatorio = 0;
	do{	
		aleatorio = Math.floor((Math.random()*imagen_contorno.length));
	}
	while (aleatorio === num1 || aleatorio === num2);
    return aleatorio;
}

function mostrarResultados(){
    clearInterval(retardoOpciones);
    document.getElementById("estimuloBox").style.visibility = "hidden";
    //document.getElementById("opcionesBox").style.visibility = "hidden";
    document.getElementById("resultadosBox").style.visibility = "visible";
}

//idFig1=numeroAleatoreoFigura();

function dibujarImagen(){
    ctx.clearRect(0,0,100,100);
    ctx2.clearRect(0,0,100,100);
    ctx3.clearRect(0,0,100,100);
    ctx4.clearRect(0,0,100,100);

	var posicion = numeroAleatoreoPosicion();
	if(posicion === 0){
		idFig1 = numeroAleatoreoFigura(100, 101);
		idFig2 = idFig1;
		idFig3 = numeroAleatoreoFigura(idFig1, 101);
		idFig4 = numeroAleatoreoFigura(idFig1, idFig3);
	}
	else if(posicion === 1){
		idFig1 = numeroAleatoreoFigura(100, 101);
		idFig2 = numeroAleatoreoFigura(idFig1, 101);
		idFig3 = idFig1;
		idFig4 = numeroAleatoreoFigura(idFig1, idFig2);
	}else if (posicion === 2){
		idFig1 = numeroAleatoreoFigura(100, 101);
		idFig2 = numeroAleatoreoFigura(idFig1, 101);
		idFig3 = numeroAleatoreoFigura(idFig1, idFig2);
		idFig4 = idFig1;
	}else{
		idFig1 = numeroAleatoreoFigura(100, 101);
		idFig2 = numeroAleatoreoFigura(idFig1, 101);
		idFig3 = idFig2;
		idFig4 = numeroAleatoreoFigura(idFig1, idFig2);
	}

	imagenc1 = new Image();
	imagenc1.src = imagen_contorno[idFig1];
	imagenc1.onload = function(){
	ctx.drawImage(imagenc1, 10, 10, 80, 80);
	}

	imagenc2 = new Image();
	imagenc2.src = imagen_contorno1[idFig2];
	imagenc2.onload = function(){
		ctx2.drawImage(imagenc2, 10, 10, 80, 80);
	}

	imagenc3 = new Image();
	imagenc3.src = imagen_contorno1[idFig3];
	//imagenc3.setAtrribute("class", "hola");
	//console.log(document.getElementById("hola"));
	imagenc3.onload = function(){
		ctx3.drawImage(imagenc3, 10, 10, 80, 80);
	}

	imagenc4 = new Image();
	imagenc4.src = imagen_contorno1[idFig4];
	imagenc4.onload = function(){
		ctx4.drawImage(imagenc4, 10, 10, 80, 80);
	//imagenc1.onclick() = prueba();
	}
}

function contar1(){
    cont++;
    if(cont === 2){
        alert("No puedes elegir la misma imagen 2 veces");
        cont = 1;
    }
    if(cont === 1 && cont2 === 1){
        verifica1();
    }else if(cont === 1 && cont3 === 1){
        verifica2();
    }else if(cont === 1 && cont4 === 1){
        verifica3();
    }
}

function contar2(){
    cont2++;
    if(cont2 === 2){
        alert("No puedes elegir la misma imagen 2 veces");
        cont2 = 1;
    }
    if(cont2 === 1 && cont === 1){
        verifica1();
    }else if(cont2 === 1 && cont3 === 1){
        verifica4();
    }else if(cont2 === 1 && cont4 === 1){
        verifica5();
    }
}

function contar3(){
    cont3++;
    if(cont3 === 2){
        alert("No puedes elegir la misma imagen 2 veces");
        cont3 = 1;
    }
    if(cont3 === 1 && cont === 1){
        verifica2();
    }else if(cont3 === 1 && cont2 === 1){
        verifica4();
    }else if(cont3 === 1 && cont4 === 1){
        verifica6();
    }
}

function contar4(){
    cont4++;
    if(cont4 === 2){
       alert("No puedes elegir la misma imagen 2 veces");
        cont3 = 1;
    }
    if(cont === 1 && cont4 === 1){
        verifica3();
    }else if(cont2 === 1 && cont4 === 1){
        verifica5();
    }else if(cont3 === 1 && cont4 === 1){
        verifica6();
    }
}

function verifica1(){
    if(idFig1 === idFig2){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}

function verifica2(){
    if(idFig1 === idFig3){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}
function verifica3(){
    if(idFig1 === idFig4){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;  
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}
function verifica4(){
    if(idFig2 === idFig3){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}

function verifica5(){
    if(idFig2 === idFig4){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}

function verifica6(){
    if(idFig3 === idFig4){
        aciertos++;
        document.getElementById("aciertos").innerHTML = aciertos;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
    else{
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}


function setNivel(unNivel){
	nivel = unNivel;
    if(unNivel === 1){
        imagen_contorno = ['images/verticales/image_1vh.png', 'images/verticales/image1_1vh.png', '1.png'];
        imagen_contorno1 = ['images/verticales/image_2vh.png', 'images/verticales/image1_2vh.png', '1.png'];
    }        
    if(unNivel === 2){
         imagen_contorno = ['images/verticales/image_1vhbw.png', 'images/verticales/image1_1vhbw.png', '1.png'];
        imagen_contorno1 = ['images/verticales/image_2vhbw.png', 'images/verticales/image1_2vhbw.png', '1.png'];
    }
    if(unNivel === 3){
        imagen_contorno = ['images/verticales/image_1vhsl.png', 'images/verticales/image1_1vhsl.png', '1.png'];
        imagen_contorno1 = ['images/verticales/image_2vhsl.png', 'images/verticales/image1_2vhsl.png', '1.png'];
    }
    if(unNivel === 4){
        imagen_contorno = ['images/horizontales/image_1hh.png', 'images/horizontales/image1_1hh.png', '1.png'];
        imagen_contorno1 = ['images/horizontales/image_2hh.png', 'images/horizontales/image1_2hh.png', '1.png'];
    }        
    if(unNivel === 5){
        imagen_contorno = ['images/horizontales/image_1hhbw.png', 'images/horizontales/image1_1hhbw.png', '1.png'];        
        imagen_contorno1 = ['images/horizontales/image_2hhbw.png', 'images/horizontales/image1_2hhbw.png', '1.png'];
    }
    if(unNivel === 6){
        imagen_contorno = ['images/horizontales/image_1hhsl.png', 'images/horizontales/image1_1hhsl.png', '1.png'];
        imagen_contorno1 = ['images/horizontales/image_2hhsl.png', 'images/horizontales/image1_2hhsl.png', '1.png'];
    }
    if(unNivel === 7){
        imagen_contorno = ['images/diagonales/image_1dh.png', 'images/diagonales/image1_1dh.png', '1.png'];
        imagen_contorno1 = ['images/diagonales/image_2dh.png', 'images/diagonales/image1_2dh.png', '1.png'];
    }        
    if(unNivel === 8){
        imagen_contorno = ['images/diagonales/image_1dhbw.png', 'images/diagonales/image1_1dhbw.png', '1.png'];     
        imagen_contorno1 = ['images/diagonales/image_2dhbw.png', 'images/diagonales/image1_2dhbw.png', '1.png'];
    }
    if(unNivel === 9){
        imagen_contorno = ['images/diagonales/image_1dhsl.png', 'images/diagonales/image1_1dhsl.png', '1.png'];
        imagen_contorno1 = ['images/diagonales/image_2dhsl.png', 'images/diagonales/image1_2dhsl.png', '1.png'];
    }
}
