// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();


//----- Código del triángulo -----//
console.group("Triangulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base; 

const areaTriangulo = (base, altura) => (base * altura) / 2;

const alturaTriangulo = (lado1, lado2, base) => {
  return Math.sqrt( (lado1 * lado2) - ((base * base) / 4) );
}

console.groupEnd();


// Código del círculo
console.group("Círculo");

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// PI
const PI = Math.PI;
 // console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
const areaCirculo = (radio) => (radio * radio) * PI;

console.groupEnd();


// Aquí vamos con el HTML

// C U A D R A D O
function calculaPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = Number(input.value);
  
  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro es: ${perimetro}`);
}

function calculaAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  
  const area = areaCuadrado(value);
  alert(`El area es: ${area}`);
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

// AREA Y PERIMETRO: CIRCULO  //

function calculaPerimetroCirculo() {
  const radio = document.getElementById("inputCiculoRadio");

  const perimetro = Number(perimetroCirculo(radio.value));

  alert(`El perimeto delcirculo es: ${perimetro}`);

}

function calculaAreaCirculo() {
  const radio = document.getElementById("inputCiculoRadio");

  const area = Number(areaCirculo(radio.value));

  alert(`El perimeto delcirculo es: ${area}`);
}