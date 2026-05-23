function fibonacci(maximo) {
  let valor_1 = 0;
  let valor_2 = 1;

  const salida = [];

  while (valor_1 < maximo) {
    salida.push(valor_1);

    // el numero siguiente es la suma de los dos anteriores
    let valor_3 = valor_1 + valor_2;

    // actualizar valores para la siguiente iteración
    valor_1 = valor_2;
    valor_2 = valor_3;
  }

  return salida;
}

export function main() {
  let limite = 1000;

  const secuencia_todos = fibonacci(limite);
  const secuencia_pares = secuencia_todos.filter((numero) => numero % 2 === 0);
  const secuencia_impares = secuencia_todos.filter((numero) => numero % 2 !== 0);

  console.log("Fibonacci todos:");
  console.log(secuencia_todos);

  console.log("Fibonacci pares:");
  console.log(secuencia_pares);

  console.log("Fibonacci impares:");
  console.log(secuencia_impares);
}
