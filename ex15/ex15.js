'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const x1 = Number(lines [0]);
const y1 = Number(lines [1]);
const x2 = Number(lines [2]);
const y2 = Number(lines [3]);

const distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));

console.log (`${distancia.toFixed(4)}`);
