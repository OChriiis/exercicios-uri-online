'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const pi = 3.14159;
const idA = Number(lines[0]);
const idB = Number(lines[1]);
const idC = Number(lines[2]);

const areaTriangulo = (idA * idC) / 2.0;
const areaCirculo = pi * Math.pow(idC, 2);
const areaTrapezio = ((idA + idB) * idC) / 2.0; 
const areaQuadrado = idB * idB;
const areaRetangulo = idA * idB; 

console.log (`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log (`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log (`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log (`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log (`RETANGULO: ${areaRetangulo.toFixed(3)}`);

