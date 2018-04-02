var tiempoCiclo = 30;

function iniciarEjercicio(){
	document.getElementById("tabla").style.visibility = "hidden";
	document.getElementById("Est").style.visibility = "visible";
	document.getElementById("estimulo").style.animationPlayState = "running";
	document.getElementById("fin").style.visibility = "visible";
	tiempoCiclo = document.getElementById("tiempo").value;
	document.getElementById("estimulo").style.animationDuration = tiempoCiclo + "s";
}

function finalizarEjercicio(){
	document.getElementById("Est").style.visibility = "hidden";
	document.getElementById("estimulo").style.animationPlayState = "paused";
	document.getElementById("tabla").style.visibility = "visible";
	document.getElementById("fin").style.visibility = "hidden";
}