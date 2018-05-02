
//https://www.w3schools.com/js/js_events_examples.asp
var canvas = document.getElementById("micanvas");
var figura = canvas.getContext('2d');
var imagen = new Image();

function Instrucciones(){
   swal("Instrucciones",
    "Aparecera una serie de caminos los cuales el paciente deberá seguir una línea dejando apretado el mouse hasta llegar a su objetivo");
}

function inicializarImagen(){
	imagen.crossOrigin = "Anonymous";
	imagen.src = "Nivel1img2.png";

	
	imagen.onload =function(){
		figura.drawImage(imagen,0,0,300,200);
		
	}
}


function validarCamino(e){
	var rect = canvas.getBoundingClientRect();
	var scrollPixel = document.body.scrollTop;
	console.log(rect.left +" "+ rect.top+"	"+scrollPixel);
	var y = (e.pageY-rect.top)- scrollPixel;
	var infoImg = figura.getImageData((e.pageX-rect.left), (y), 1, 1);
	var rojo = infoImg.data[0];
	var verde = infoImg.data[1];
	var azul = infoImg.data[2];
	var alpha = infoImg.data[3];
	
	console.log((e.pageX-rect.left)+" "+(y)+"   "+rojo+" "+verde+" "+azul);
	if(rojo === 255 && verde === 255 && azul === 255 || rojo === 0 && verde === 0 && azul === 0){
		//swal('Error, haz seleccionado un espacio en blanco para iniciar el recorrido');
	}
	else{
	}
}