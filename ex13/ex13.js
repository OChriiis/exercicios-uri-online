'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ').map(item => parseInt(item));

const valor1 = Number(lines [0]);
const valor2 = Number(lines [1]);
const valor3 = Number(lines [2]);

const maior12 = (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2;
const maiorX3 = (valor3 + maior12 + Math.abs(valor3 - maior12)) / 2;

console.log (`${maiorX3.toFixed(0)} eh o maior`);
