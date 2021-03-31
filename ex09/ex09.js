'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const nomeFuncionario = (lines [0]);
const salarioFixo = Number(lines [1]);
const totalVendas = Number(lines [2]);

const comissao = totalVendas * 0.15;
const salarioTotal = salarioFixo + comissao;

console.log (`TOTAL = R$ ${salarioTotal.toFixed(2)}`);
