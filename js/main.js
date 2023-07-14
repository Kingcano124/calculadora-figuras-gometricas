
//Funciones cuadrado
function PerimetroCuadrado(){
    var ladosCuadrado = document.getElementById("ladoCuadrado");
    var valor = parseInt(ladosCuadrado.value.trim());

    if (isNaN(valor)) {
        alert("El campo es obligatorio. Por favor, ingrese un valor numérico.");
        return false;
    } else {

        valor = valor*4;

        var setresult = document.getElementById("result");
        setresult.textContent = "El perímetro del cuadrado es: "+valor+"cm";
    }
}

function AreaCuadrado(){
    var ladosCuadrado = document.getElementById("ladoCuadrado");
    var valor = parseInt(ladosCuadrado.value.trim());
   
    if (isNaN(valor)) {
        alert("El campo es obligatorio. Por favor, ingrese un valor numérico.");
        return false;
    } else {
        valor = valor*valor;
        var setresult = document.getElementById("result");
        setresult.textContent = "El área del cuadrado es: "+valor+"cm";
    }
}

//Funciones triangulo
function PerimetroTriangulo(){
    var ladoUnoTriangulo = document.getElementById("ladoUnoTriangulo");
    var ladoDosTriangulo = document.getElementById("ladoDosTriangulo");
    var ladoTresTriangulo = document.getElementById("ladoTresTriangulo");

    var valorUno = parseInt(ladoUnoTriangulo.value.trim());
    var valorDos = parseInt(ladoDosTriangulo.value.trim());
    var valorTres = parseInt(ladoTresTriangulo.value.trim());

    if (isNaN(valorUno) || isNaN(valorDos) || isNaN(valorTres)) {
        alert("Los campos son obligatorios. Por favor, ingrese un valor numérico.");
        return false;
    } else {
   
        var resultado = valorUno+valorDos+valorTres;

        var setresult = document.getElementById("result");
        setresult.textContent = "El perímetro del triángulo es: "+resultado+"cm";
    }
}


function areaTriangulo(){
    var base = document.getElementById("BaseTriangulo");
    var ladoTriangulo = document.getElementById("ladoUTriangulo");
   
    var valorUno = parseInt(base.value.trim());
    var valorDos = parseInt(ladoTriangulo.value.trim());

    if (isNaN(valorUno) || isNaN(valorDos)) {
        alert("Los campos son obligatorios. Por favor, ingrese un valor numérico.");
        return false;
    } else {
   
        var resultado = (valorUno*valorDos)/2;

        var setresult = document.getElementById("result");
        setresult.textContent = "El área del triángulo es: "+resultado+"cm";
    }
}

//Funciones circulo.

function perimetroCirculo(){
    let pi =  Math.PI;
    var radio = document.getElementById("radio");
    var valor =   parseInt(radio.value.trim());

    if (isNaN(valor)) {
        alert("El campo es obligatorio. Por favor, ingrese un valor numérico.");
        return false;
    } else {
    
        var resultado = 2*pi*valor;
        resultado = resultado.toFixed(2);

        var setresult = document.getElementById("result");
        setresult.textContent = "El perímetro del circulo es: "+resultado+"cm";
    }
}

function areaCirculo(){
    let pi =  Math.PI;
    var radio = document.getElementById("radio");
    var valor =   parseInt(radio.value.trim());

    if (isNaN(valor)) {
        alert("El campo es obligatorio. Por favor, ingrese un valor numérico.");
        return false;
    } else {
    
        var resultado = pi*(valor*valor);
        resultado = resultado.toFixed(2);

        var setresult = document.getElementById("result");
        setresult.textContent = "El área del circulo es: "+resultado+"cm";
    }
}

function diametroCirculo() {
    var radio = document.getElementById("radio");
    var valor = parseInt(radio.value.trim());
  
    if (isNaN(valor)) {
      alert("El campo es obligatorio. Por favor, ingrese un valor numérico.");
      return false;
    } else {
      var resultado = 2 * valor;
  
      var setresult = document.getElementById("result");
      setresult.textContent = "El diámetro del círculo es: " + resultado + " cm";
    }
}
  