'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const distanciaPercorrida = Number(lines [0]);
const combustivelGasto = Number(lines [1]);

const consumoMedio = distanciaPercorrida / combustivelGasto;

console.log (`${consumoMedio.toFixed(3)} km/l`);
