function calcularPromedio(lista)
{

  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}


const lista = [];

function pushArray() {
  const input = document.getElementById("inpuPromedio");
  const value = Number(input.value);
  console.log(value)
  const elements = lista;
  
  elements.push(value);
  
  elements.sort((a, b) => a - b);
  
  console.log(elements);
  return elements;
}


console.log(lista);



function esPar(numerito) {

  if (numerito % 2 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }

}

let mediana;

function calcular() {
  
  const mitadLista = parseInt(lista.length / 2);
  const resul = document.getElementById('print');
  
  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    const promedioElemento1y2 = calcularPromedio([
      elemento1,
      elemento2
    ]);
  
    mediana = promedioElemento1y2;
  }
  else {
    mediana = lista[mitadLista];
  }
  
  console.log(lista);
  resul.innerText = (`La mediana es: ${mediana}`);
}