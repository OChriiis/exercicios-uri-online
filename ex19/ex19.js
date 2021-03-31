'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

let totalSegundos = parseInt(Number(lines [0]));

const qtdHoras = parseInt(totalSegundos / 3600);
totalSegundos = totalSegundos % 3600;

const qtdMinutos = parseInt(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

const qtdSegundos = parseInt(totalSegundos / 1);
totalSegundos = totalSegundos % 1;


console.log (`${qtdHoras.toFixed(0)}:${qtdMinutos.toFixed(0)}:${qtdSegundos.toFixed(0)}`);
