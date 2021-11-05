const list = [];

function pushArray() {
  const input = document.getElementById("inpuPromedio");
  const value = Number(input.value);
  console.log(value)
  const elements = list;
  
  elements.push(value);
  
  return elements;
}

const listCount = {};

function calcular() {
  
  list.map(
    function(elemento)
    {
      if (listCount[elemento])
      {
        listCount[elemento] += 1;
      }
      else
      {
        listCount[elemento] = 1;
      }
      
    }
  );
  
  const listArray = Object.entries(listCount).sort(
    function (elementoA, elementoB){
      return elementoA[1] - elementoB[1];
    }
  );
  const imprimir = document.getElementById("print");
  const moda = listArray[listArray.length - 1][0];
  
  console.log(moda);
  return imprimir.innerText = (`La moda es: ${moda}`);
}