
//Funciones cuadrado
function PerimetroCuadrado(){
    var ladosCuadrado = document.getElementById("ladoCuadrado");
    var valor = ladosCuadrado.value;
    valor = valor*4;

    var setresult = document.getElementById("result");
    setresult.textContent = "El perímetro del cuadrado es: "+valor+"cm";
}

function AreaCuadrado(){
    var ladosCuadrado = document.getElementById("ladoCuadrado");
    var valor = ladosCuadrado.value;
    valor = valor*valor;

    var setresult = document.getElementById("result");
    setresult.textContent = "El área del cuadrado es: "+valor+"cm";
}

//Funciones triangulo
function PerimetroTriangulo(){
    var ladoUnoTriangulo = document.getElementById("ladoUnoTriangulo");
    var ladoDosTriangulo = document.getElementById("ladoDosTriangulo");
    var ladoTresTriangulo = document.getElementById("ladoTresTriangulo");

    var valorUno = parseInt(ladoUnoTriangulo.value);
    var valorDos = parseInt(ladoDosTriangulo.value);
    var valorTres = parseInt(ladoTresTriangulo.value);

    if(resultado = null){
        resultado = 0;
    }else{
        var resultado = valorUno+valorDos+valorTres;
    }
    
   
    var setresult = document.getElementById("result");
    setresult.textContent = "El perímetro del triángulo es: "+resultado+"cm";
}


//Funciones circulo.