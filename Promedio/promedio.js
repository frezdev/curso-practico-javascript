const lista = [];

function pushArray() {
  const input = document.getElementById("inpuPromedio");
  const value = Number(input.value);
  const elements = lista;
  
  elements.push(value);
  return console.log(elements);

}


console.log(lista);

function calcularMediaAritmetica(lista){

   const sumaLista = lista.reduce(
       function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
       }
    );
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

// function calcular(lista) {
//   const elements = lista;
//   const resutlt = calcularMediaAritmetica(elements);
//   return console.log(resutlt);
// }