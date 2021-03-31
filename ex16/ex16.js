'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const valorEntrada = Number(lines [0]);

const qtdMinutos = (60 * valorEntrada) / 30;

console.log (`${qtdMinutos.toFixed(0)} minutos`);
