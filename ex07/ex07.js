'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const A = Number(lines [0]);
const B = Number(lines [1]);
const C = Number(lines [2]);
const D = Number(lines [3]);

const diferenca1 = (A * B);
const diferenca2 = (C * D);
const diferencatotal = (diferenca1 - diferenca2);

console.log (`DIFERENCA = ${diferencatotal}`);