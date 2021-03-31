'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const raio = parseFloat(Number(lines [0]));
const pi = 3.14159;
const volumeEsfera = (4/3) * pi * Math.pow(raio, 3);

console.log (`VOLUME = ${volumeEsfera.toFixed(3)}`);


