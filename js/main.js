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