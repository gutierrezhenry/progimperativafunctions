// Crear una función que convierta pulgadas en centímetros. Es decir, recibe por parámetro pulgadas y retorna su equivalente en centímetros.

let pulgada= 2.54

function conversor (centimetros){
    return  centimetros*pulgada
}
console.log(conversor(5))

// Crear una función que recibe un string y lo convierte en una URL. Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.

function conversorurl(palabra){
    return "www."+palabra+".com"
}
console.log(conversorurl("Henry"));

// Crear una función que recibe un string y devuelve la misma frase, pero con admiración. 

function admiracion(palabra){
    return palabra+"!!!"
}
console.log(admiracion("Henry"));

// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. 

const edadperruna = 7

function conversorperruno (edad){
    return edadperruna*edad
}
console.log(conversorperruno(20))


// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.

function valorhora(sueldo){
    return ((sueldo/30)/8)
}
console.log(valorhora(3000000));

// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

function calculadorIMC(peso,altura){
    return (peso/(altura*altura))
}
console.log(calculadorIMC(85,1.90));

//Convertir texto en mayuscula

function minusculamayuscula(texto){
    return texto.toUpperCase()
}

console.log(minusculamayuscula("juan"));


//mostrar tipo de variable, numerica o string
function tipo(texto){
    return typeof(texto)
}

console.log(tipo("23"));


//calcular radio de circulo

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }

  console.log(calculaCircunferencia(5));
