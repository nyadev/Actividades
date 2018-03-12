var nivel = 1;
        var contador = 0;
        var num = 0;
        var nrepetir = 10;

        var numimg1;
        var numimg2;

        aciertos=0;
        errores=0;
        
        var imag1 = new Array('img1.png','img2.png','img3.png','img4.png','img5.png');
        var imag2 = new Array('img6.png','img7.png','img8.png','img9.png','img10.png');
        

function instrucciones(){
    
      swal(
      "Instrucciones",
     " Aparecerán tres imagenes (Cara, Sol, Luna), el paciente deberá decir cual de las imagenes está más cerca a la cara. El estímulo cambiará hasta que el paciente haya dado una respuesta. En la fase 1 habrá circulos entre la cara y las otras imagenes para que el paciente pueda contarlos y determinar cuál esta más cercano o lejano. En la fase 2 desapareceran los circulos entre las imagenes. La actividad acabará cuando el paciente obtenga 10 aciertos.",
        );
}

        function numeroImagen1(){
            var aleatorio = 0;        
            do{
                aleatorio=Math.floor((Math.random()*imag1.length));
            }while(aleatorio == nrepetir)
            nrepetir = aleatorio;
            return aleatorio;
        }

        function numeroImagen2(){
            var aleatorio = 0;        
            do{
                aleatorio=Math.floor((Math.random()*imag2.length));
            }while(aleatorio == nrepetir)
            nrepetir = aleatorio;
            return aleatorio;
        }

        function setFase(unNivel){
             if(unNivel==1){
                nivel=unNivel;
                contador = 0;
            }
            if(unNivel==2){
                nivel=unNivel;
                contador = 0;
            }
        }

        function generarImagen1(){
            numimg1 = numeroImagen1();
            var src = imag1[numimg1];
            $("#img").attr("src", src);
        }

        function generarImagen2(){
            numimg2 = numeroImagen2();
            var src = imag2[numimg2];
            $("#img").attr("src", src);
        }

        function iniciarImagen(){
                if(nivel == 1){
                    generarImagen1();
                }

                if(nivel == 2){
                    generarImagen2();
                }
        }

        $( "#Iniciar" ).click(function() { 
            aciertos = 0;
            errores = 0;
            document.getElementById("aciertos").innerHTML=aciertos;
            document.getElementById("errores").innerHTML=errores;
            document.getElementById("Guardar").style.visibility="hidden";
            document.getElementById("luna").style.visibility="visible";
            document.getElementById("sol").style.visibility="visible";
            document.getElementById("rad1").disabled=true;
            document.getElementById("rad2").disabled=true;
            if(contador == 0){
                iniciarImagen();
                contador = 1;
            }

        });

        $( "#luna" ).click(function() {
            var dir = document.getElementById("img").src;
            var num = dir.charAt(dir.length-5);
            if(num == "1" || num == "4" || num == "6" || num == "9"){
                aciertos++;
                document.getElementById("aciertos").innerHTML=aciertos;
                
            }
            else{
                errores++;
                document.getElementById("errores").innerHTML=errores;
            }
            var num = aciertos+errores;
            if (num == 10){
                alert(aciertos+"/10")
                contador = 0;
                document.getElementById("luna").style.visibility="hidden";
                document.getElementById("sol").style.visibility="hidden";
                document.getElementById("Guardar").style.visibility="visible";
                document.getElementById("rad1").disabled=false;
                document.getElementById("rad2").disabled=false;
            }
            if(contador = 1){
                iniciarImagen();
            }
        });

        $( "#sol" ).click(function() {
            var dir = document.getElementById("img").src;
            var num = dir.charAt(dir.length-5);
            if(num == "2" || num == "3" || num == "5" || num == "7" || num == "8" || num == "0"){
                aciertos++;
                document.getElementById("aciertos").innerHTML=aciertos;
                
            }
            else{
                errores++;
                document.getElementById("errores").innerHTML=errores;
            }
            var num = aciertos+errores;
            if (num == 10){
                alert(aciertos+"/10")
                contador = 0;
                document.getElementById("luna").style.visibility="hidden";
                document.getElementById("sol").style.visibility="hidden";
                document.getElementById("Guardar").style.visibility="visible";
                document.getElementById("rad1").disabled=false;
                document.getElementById("rad2").disabled=false;
            }
            if(contador = 1){
                iniciarImagen();
            }
        });