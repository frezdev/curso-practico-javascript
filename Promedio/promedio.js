const lista = [];

function pushArray() {
  const input = document.getElementById("inpuPromedio");
  const value = Number(input.value);
  console.log(value)
  const elements = lista;
  
  elements.push(value);
  
  return elements;
  // return console.log(elements);
}

function calcularMediaAritmetica(element){
  let sumaLista = 0;

  element.forEach(element => sumaLista += element);

  const promedioLista = sumaLista / element.length;
    
  return promedioLista;
}

function calcular() {

  const result = calcularMediaAritmetica(lista);
  const imprimir = document.getElementById("print");

  return imprimir.innerText = (`El promedio es: ${result}`);

}

