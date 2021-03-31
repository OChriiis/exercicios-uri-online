'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const tempoViagem = Number(lines [0]);
const velocidadeMedia = Number(lines [1]);

const totalPercorrido = tempoViagem * velocidadeMedia;
const qtdCombustivelGasto = totalPercorrido / 12;

console.log (`${qtdCombustivelGasto.toFixed(3)}`);
