'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const idPeca1 = Number(lines [0]);
const qtdPeca1 = Number(lines [1]);
const valorUnitarioPorPeca1 = Number(lines [2]);

const idPeca2 = Number(lines [3]);
const qtdPeca2 = Number(lines [4]);
const valorUnitarioPorPeca2 = Number(lines [5]);

const valorTotalPeca1 = qtdPeca1 * valorUnitarioPorPeca1;
const valorTotalPeca2 = qtdPeca2 * valorUnitarioPorPeca2;

const valorTotalAPagar = valorTotalPeca1 + valorTotalPeca2;

console.log (`VALOR A PAGAR: R$ ${valorTotalAPagar.toFixed(2)}`);
