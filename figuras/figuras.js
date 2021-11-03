// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es : " + areaCuadrado + "cm²");
console.groupEnd();


//----- Código del triángulo -----//
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
/* console.log(
  "Los lados del triángulo miden : " 
  + ladoTriangulo1 
  + "cm, " 
  + ladoTriangulo2 
  + "cm, " 
  + baseTriangulo 
  + "cm"
); */

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}
// console.log("El área del triángulo es : " + areaTriangulo + "cm²");

function alturaTriangulo(lado1, lado2, base) {
  return Math.sqrt( (lado1 * lado1) - (base * base) / 4 );
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí vamos con el HTML

// C U A D R A D O
function calculaPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calculaAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  
  const area = areaCuadrado(value);
  alert(area);
}

// T R I A N G U L O

function calculaPerimetroTriangulo() {
  const input_L1 = document.getElementById("inputTriangulo_L1");
  const input_L2 = document.getElementById("inputTriangulo_L2");
  const input_B = document.getElementById("inputTriangulo_B");
  
  let valueL1 = parseFloat(input_L1.value);
  let valueL2 = parseFloat(input_L2.value);
  let valueB = parseFloat(input_B.value);
  
  const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
  alert(perimetro);
}

function calculaAreaTriangulo() {
  const input_L1 = document.getElementById("inputTriangulo_L1");
  const input_L2 = document.getElementById("inputTriangulo_L2");
  const input_B = document.getElementById("inputTriangulo_B");
  
  let valueL1 = parseFloat(input_L1.value);
  let valueL2 = parseFloat(input_L2.value);
  let valueB = parseFloat(input_B.value);

  
  const altura = alturaTriangulo(valueL1, valueL2, valueB);
  
  const area = areaTriangulo(valueB, altura);
  alert(area);
}