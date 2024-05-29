
let vitorias = 95;
let derrotas = 20; 
let quantidadeDeVitorias = (vitorias - derrotas);
let saldoDeVitorias = quantidadeDeVitorias;
let nivel 
if (quantidadeDeVitorias <= 10  ){
    nivel = "Ferro";
}else  if (quantidadeDeVitorias >= 11 && quantidadeDeVitorias <= 20) {
    nivel = "Bronze";
} else if (quantidadeDeVitorias >= 21 && quantidadeDeVitorias <= 50) {
    nivel = "Prata";
}  else if (quantidadeDeVitorias >= 51 && quantidadeDeVitorias <= 80) {
    nivel = "Ouro";
}else if (quantidadeDeVitorias >= 81 && quantidadeDeVitorias <= 90) {
     nivel ="Diamante";
}else if (quantidadeDeVitorias >= 91 && quantidadeDeVitorias <= 100) {
    nivel = "Lendário";
}else if (quantidadeDeVitorias <= 101 ) {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " + saldoDeVitorias + " está no nível de " + nivel)
