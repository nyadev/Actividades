var images;
var usedImages;
//Estas variables se inicializan en begin();
var aciertos;
var errores;
var level = 1;
var correctSrc;
var nCorrects;
var stopCounting;
var timelap;
var lap;
var radioBotones = document.getElementsByName("nivel");

function instructions(){
  swal("Instrucciones","Se mostrará una serie de estímulos aleatorios donde el niño deberá seleccionar con el cursor el estímulo indicado durante cierto tiempo");
}

function begin(){
    document.getElementById("begin").style.display = "none"
    stopCounting = false;
    displaySave(false);
    timelap = 0;
    lap = 1;
    nCorrects = 0;
    images = [["nCirculo.png","nCirculoCirculo.png","nCirculoEstrella.png","nEstrella.png","nEstrella8.png", "nEstrella12.png","nTick.png"],
    ["rCirculo.png","rCirculoCirculo.png","rCirculoEstrella.png","rEstrella.png","rEstrella8.png", "rEstrella12.png","rTick.png"]];
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = true;
	}
    usedImages = null;
    document.getElementById("aciertos").innerHTML = 0;
    document.getElementById("errores").innerHTML = 0;
    aciertos = 0;
    errores = 0;
    assingKey();
    for (var i = 1;i <= 40;i++) {
        (function(ind) {
            setTimeout(function(){assign(ind);lap=ind;}, timelap *ind);
        })(i);
    }
}

function setLevel(n){
    level = n;
    document.getElementById("level").innerHTML = n;
}

function assingKey(){
    var imgrow;
    var imgcol = Math.floor(Math.random()*7);
    usedImages = images;
    if(level == 1 || level == 2){
        timelap = 500;
    }
    else{
        timelap = 0;
    }
    if(level == 1 || level == 3){
        imgrow = 1;
    }
    if(level == 2 || level == 4 || level == 5){
        imgrow = 0;
    }

    usedImages[0][imgcol] = images[imgrow][imgcol];
    //Asigna una src correcta de manera global
    correctSrc = images[imgrow][imgcol];
    document.getElementById("0").src = correctSrc;
    document.getElementById("0").style.display = "table";
}

function assign(i){
    var n = Math.floor(Math.random() * 7);
    var assigned = usedImages[0][n];
    document.getElementById(i).src = assigned;
    document.getElementById(i).style.display = "table";
    if(correctSrc == assigned)
        nCorrects++
}

function validate(id, src){
    splitsrc = src.split("/");
    //Hace un split porque originalmente la src que toma desde el html esta como file//:C//Documents...... y pues no coincide
    justsrc = splitsrc[splitsrc.length-1];
    //Compara los src de cada imagen
    if(justsrc === correctSrc){
        count(true);
        makedisappear(id)
    }
    else{
        count(false);
        swal('Error');
    }
    //Si ya se acabaron los estimulos clave termina el ejercicio y despliega el boton "Guardar Resultados"
    //nCorrects lo asigna al empezar, son el numero de estimulos correctos
    if((aciertos == nCorrects)&&(lap == "40")){
        displaySave(true);
        stopCounting = true;
    }

}

function count(r){
    //Stopcounting sirve para que deje de contar cuando se acabe el ejercicio
    if(!stopCounting){
        if(r)
            aciertos++
        else
            errores++
    }
    document.getElementById("aciertos").innerHTML = aciertos;
    document.getElementById("errores").innerHTML = errores;
}

function makedisappear(id){
    document.getElementById(id).src = "";
    document.getElementById(id).style.display = "none";
}

function displaySave(bool){
    if(bool)
        document.getElementById("save-results").style.display = "table"
    else
        document.getElementById("save-results").style.display = "none"
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);
    for(var i = 1; i<=40;i++){
        document.getElementById(i).src = "";
        document.getElementById(i).style.display = "none";
    }
    document.getElementById("0").style.display = "none";
    document.getElementById("begin").style.display = "table";
    document.getElementById("save-results").style.display = "none";
    document.getElementById("aciertos").innerHTML = "0";
    document.getElementById("errores").innerHTML = "0";
	for(var i = 0; i<radioBotones.length; i++){
		radioBotones[i].disabled = false;
	}
    return;
}