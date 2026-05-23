import {main as respuesta_1} from "./punto_1.js";
import {main as respuesta_2} from "./punto_2.js";
import {main as respuesta_3} from "./punto_3.js";

console.log(`
1. Mostrar en consola la secuencia de Fibonacci:
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.
`.trim())

respuesta_1();

console.log(
    `2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.`)
respuesta_2();

console.log(
    `3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.`
)
respuesta_3();