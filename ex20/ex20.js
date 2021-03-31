'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

let totalDias = parseInt(Number(lines [0]));

const qtdAno = parseInt(totalDias / 365);
totalDias = totalDias % 365;

const qtdMes = parseInt(totalDias / 30);
totalDias = totalDias % 30;

const qtdDias = parseInt(totalDias / 1);
totalDias = totalDias % 1;

console.log (`${qtdAno.toFixed(0)} ano(s)`);
console.log (`${qtdMes.toFixed(0)} mes(es)`);
console.log (`${qtdDias.toFixed(0)} dia(s)`);
