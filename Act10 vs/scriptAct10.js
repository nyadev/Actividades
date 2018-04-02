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
var radioBotones = document.getElementsByName("niveles");
var ctx = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');
var imagen_contorno = ['calabaza.jpg', 'cereza.png', 'copo.png', 
                'estrella.jpg', 'fantasma.jpg', 'galleta.png', 'manzana.jpg', 
                'nek.png', 'nieve.jpg', 'pe.jpg'];
        
var imagen_contorno1 = ['calabaza.jpg', 'cereza.png', 'copo.png', 
                'estrella.jpg', 'fantasma.jpg', 'galleta.png', 'manzana.jpg', 
                'nek.png', 'nieve.jpg', 'pe.jpg'];
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

function iniciarEjercicio(){
	retardo = setTimeout(function(){mostrarResultados();},tiempoTotal);
	iniciarSecuencia();
	aciertos = 0;
	errores = 0;
	document.getElementById("aciertos").innerHTML = aciertos;
	document.getElementById("errores").innerHTML = errores;
	document.getElementById("comienzo").style.visibility = "hidden";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
}

function iniciarSecuencia(){
	mostrarEstimulo();
    cont = 0;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;	
}

function mostrarEstimulo(){
	document.getElementById("estimuloBox").style.visibility="visible";
	//document.getElementById("opcionesBox").style.visibility="hidden";
	document.getElementById("resultadosBox").style.visibility = "hidden";
    dibujarImagen();
}
//Funcion para obtener el número aleatoreo de la figura    
function numeroAleatoreoPosicion(){
    var aleatorio = 0;        
    aleatorio = Math.floor((Math.random()*3));
    return aleatorio;
}

function instrucciones(){
      swal(
		"Instrucciones",
		"Apareceran 4 imagenes en el centro y debes seleccionar aquellas que son iguales durante 20 segundos, dependiendo el nivel las imagenes cambian.",
        );
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
	document.getElementById("save-results").style.display = "table";
}

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
	imagenc2.src = imagen_contorno[idFig2];
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
    if(cont===2){
        swal("No puedes elegir la misma imagen 2 veces");
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
        swal("No puedes elegir la misma imagen 2 veces");
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
        swal("No puedes elegir la misma imagen 2 veces");
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
       swal("No puedes elegir la misma imagen 2 veces");
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
		swal('Error');
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
		swal('Error');
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
		swal('Error');
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
		swal('Error');
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
		swal('Error');
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
		swal('Error');
        errores++;
		document.getElementById("errores").innerHTML = errores;
        //Volvemos a iniciar la secuencia
        iniciarSecuencia();
    }
}

function setNivel(unNivel){
	nivel = unNivel;
	document.getElementById("nivel").innerHTML = nivel;
     if(unNivel === 1){
        nivel = unNivel;
        imagen_contorno = ['calabaza.jpg', 'cereza.png', 'copo.png', 
                'estrella.jpg', 'fantasma.jpg', 'galleta.png', 'manzana.jpg', 
                'nek.png', 'nieve.jpg', 'pe.jpg'];
        imagen_contorno1 = ['calabaza.jpg', 'cereza.png', 'copo.png', 
                'estrella.jpg', 'fantasma.jpg', 'galleta.png', 'manzana.jpg', 
                'nek.png', 'nieve.jpg', 'pe.jpg'];
    }
    if(unNivel === 2){
        nivel = unNivel;
        imagen_contorno = ['calabaza.jpg', 'cereza.png', 'copo.png', 
                'estrella.jpg', 'fantasma.jpg', 'galleta.png', 'manzana.jpg', 
                'nek.png', 'nieve.jpg', 'pe.jpg'];
        imagen_contorno1 = ['calabaza1.jpg', 'cereza1.png', 'copo1.jpg', 
                'estrella1.jpg', 'fantasma1.jpg', 'galleta1.png', 'manzana1.jpg', 
                'nek1.jpg', 'nieve1.jpg', 'pe1.jpg'];
    }
    if(unNivel === 3){
        nivel = unNivel;
        imagen_contorno = ['caballo.jpg', 'conejo.gif', 'delfin.png', 
                'elefante.jpg', 'gato.jpg', 'jirafa.jpg', 'leon.png', 
                'oso.png', 'perrito.jpg', 'pez.jpg'];
        imagen_contorno1 = ['caballo.jpg', 'conejo.gif', 'delfin.png', 
                'elefante.jpg', 'gato.jpg', 'jirafa.jpg', 'leon.png', 
                'oso.png', 'perrito.jpg', 'pez.jpg'];
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


