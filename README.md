# G26-S1-tarea-5
Tarea 5 del curso de frontend.

## Descripción
Este proyecto contiene tres ejercicios JavaScript que demuestran conceptos fundamentales de programación como iteración, filtrado de datos y manipulación de arrays.

---

## Archivos del Proyecto

### `main.js`
**Propósito:** Archivo principal que orquesta la ejecución de los tres ejercicios.
- Importa las funciones principales de `punto_1.js`, `punto_2.js` y `punto_3.js`
- Muestra en consola descripciones de cada ejercicio
- Ejecuta cada una de las funciones en orden

**Tecnología:** ES6 Modules (import/export)

---

### `punto_1.js` - Secuencia de Fibonacci
**Propósito:** Generar y filtrar la secuencia de Fibonacci entre 0 y 1000.

**Funcionalidades:**
1. Genera la secuencia completa de Fibonacci hasta 1000
2. Filtra los números **pares** de la secuencia
3. Filtra los números **impares** de la secuencia

**Lógica:**
- Utiliza un algoritmo iterativo donde cada número es la suma de los dos anteriores
- Implementa dos funciones: `fibonacci()` para generar la secuencia y `main()` para aplicar filtros
- Usa `Array.filter()` para separar pares e impares

**Salida esperada:**
- Array completo: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
- Array pares: [0, 2, 8, 34, 144, ...]
- Array impares: [1, 1, 3, 5, 13, 21, ...]

---

### `punto_2.js` - Conversión a Mayúsculas
**Propósito:** Convertir un arreglo de strings a mayúsculas.

**Funcionalidades:**
- Recibe un arreglo de nombres Pokémon: `["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]`
- Retorna un nuevo arreglo con todos los nombres en mayúsculas

**Método utilizado:** `Array.map()` con `String.toUpperCase()`

**Salida esperada:**
```
["PIKACHU", "CHARMANDER", "BULBASAUR", "SQUIRTLE"]
```

---

### `punto_3.js` - Filtrado de Pokémon por Tipo
**Propósito:** Filtrar un arreglo de objetos Pokémon para obtener solo los de tipo "Fuego".

**Funcionalidades:**
- Procesa un arreglo de 7 objetos Pokémon con propiedades `nombre` y `tipo`
- Filtra solo los Pokémon cuyo tipo es "Fuego"

**Método utilizado:** `Array.filter()`

**Pokémon de tipo Fuego encontrados:**
- Charmander
- Charmeleon
- Charizard

**Salida esperada:**
```
[
  { nombre: "Charmander", tipo: "Fuego" },
  { nombre: "Charmeleon", tipo: "Fuego" },
  { nombre: "Charizard", tipo: "Fuego" }
]
```

---

## Cómo Ejecutar
Desde la terminal, en el directorio del proyecto:

```bash
node main.js
```

Este comando ejecutará todos los ejercicios y mostrará los resultados en la consola.

---

## Conceptos Clave Utilizados
- **ES6 Modules:** Importación y exportación de funciones
- **Array Methods:** `map()`, `filter()`
- **Iteración:** Bucles while para generar secuencias
- **Objetos JavaScript:** Propiedades y acceso a valores
- **Algoritmos:** Secuencia de Fibonacci
