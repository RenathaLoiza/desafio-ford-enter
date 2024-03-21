// import { CalcTriangulo } from "./calculoTriangulo.js"
// import { Placar } from "./jogoFutebol.js"
// import { sortear } from "./nomesSortidos.js"
// import { Desconto } from "./descontoFuncionario.js"
// import { Gasolina } from "./postoGasolina.js"
// import { ProdutoDesconto } from "./produtosDesconto.js"
// import { Mortalidade } from "./taxaMortalidade.js"

// export function CalcTriangulo() {

//     let lado1 = prompt("Digite o primeiro lado do triangulo");
//     let lado2 = prompt("Digite o segundo lado do triangulo");
//     let lado3 = prompt("Digite o segundo lado do triangulo");

//     if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
//         alert("o triangulo é Equilátero ")
//     }

//     else if (lado1 == lado2 && lado1 != lado3 && lado2 != lado3 || lado1 == lado3 && lado1 != lado2 && lado3 != lado2 || lado2 == lado3 && lado2 != lado1 && lado3 != lado1) {
//         alert("O triangulo é Isóscele")
//     }

//     else if (lado1 != lado2 != lado3) {
//         alert("O triangulo Escaleno");
//     }
//     else {
//         alert("digite algum valor");
//     }
// }

// export function Desconto() {
//     let opcoes = parseInt(prompt(`você é cliente 
//         1-Cliente
//         2-Funcionario
//         3-VIP`));
//     let totalCompra = prompt("Valor total da compra?");
//     let totalDescFuncionario = totalCompra * 0.10;
//     let totalDescVip = totalCompra * 0.05;
//     let totalDescFuncionario1 = totalCompra - totalDescFuncionario;
//     let totalDescVip1 = totalCompra - totalDescVip;

//     //processamento de dados
//     // = usar a estrutura switch case para determinar se é cliente, funcionário ou vip
//     switch (opcoes) {
//         case 1:
//             alert(`você é cliente comum, e voce não possui desconto ${totalCompra} reais`);
//             break;
//         case 2:
//             alert(`Você é um cliente funcionario é possui o valor de 10% valor a pagar ${totalDescFuncionario1} reais`);
//             break;
//         case 3:
//             alert(`Você é um cliente VIP e possui o valor de 5% valor a pagar ${totalDescVip1} reais`);
//             break;
//         default:
//             alert("Digite algum valor");
//             break;
//     }
// }

// export function Placar() {
//     let time1 = prompt("Digite o nome do primeiro time");
//     let time1gol = parseInt(prompt("digite a quantidade de gols do primeiro time"));
//     let time2 = prompt("Digite o nome do segundo time");
//     let time2gol = parseInt(prompt("digite a quantidade de gols do segundo time"));


//     if (time1gol > time2gol) {
//         alert(`O time ${time1}com ${time1gol} e uma diferença de ${time1gol - time2gol} e o placar 
//             ${time1} ${time1gol} X ${time2} ${time2gol}`);
//     }
//     else if (time1gol == time2gol) {
//         alert(`Os times estão empatados e o placar ${time1} ${time1gol} X ${time2} ${time2gol}`);
//     }
//     else if (time1gol < time2gol) {
//         alert(`Os time ${time2} ganhou com ${time2gol} e uma diferença de ${time2gol - time1gol} e o placar 
//             ${time1} ${time1gol} X ${time2} ${time2gol}`);
//     }
//     else {
//         alert("verifique se você digitou todas as informações");
//     }
// }

// export function sortear() {
//     let nomes = []
//     let quantidade = parseInt(prompt("Quantos nomes deseja colocar na lista"));
//     let bucarNome = ("Digite o nome que deseja procurar");
//     for (let i = 0; i < quantidade; i++) {
//         let nome = prompt("Qual seu nome?");
//         nomes.push(nome);
//     }
//     let nomeBusca = prompt("Qual nome deseja buscar");
//     let encontrado = nomes.includes(nomeBusca)


//     if (encontrado) {
//         alert(`ACHEI o nome ${nomeBusca}`);
//     }
//     else {
//         alert(`Não achei o nome ${nomeBusca}`);


//     }
// }
// export function Gasolina() {
//     let opcoesCombustiveis = prompt(`Qual combustivel você deseja abastecer 
//                     A-álcool valor  R$ 4,90
//                     G-gasolina valor R$ 5,30`).toUpperCase();

//     let litros = parseFloat(prompt("Digite quantos litros "));

//     switch (opcoesCombustiveis) {
//         case "A":
//             if (litros <= 20) {
//                 let valorLitro = litros * 4.90;
//                 let valorDescon3 = valorLitro * 0.03;

//                 alert(`você tera um desconto de 3% ${valorDescon3} valor a pagar ${valorLitro - valorDescon3} reais`);
//             }
//             else if (litros > 20) {
//                 let valorLitro = litros * 4.90;
//                 let valorDescon5 = valorLitro * 0.05;

//                 alert(`você tera um desconto de 3% ${valorDescon5} valor a pagar ${valorLitro - valorDescon5} reais`);

//             }
//             else {
//                 alert("VOCÊ DIGITOU ALGO ERRADO");
//             }

//             break;
//         case "G":
//             if (litros <= 20) {
//                 let valorLitro = litros * 5.30;
//                 let valorDescon4 = valorLitro * 0.04;

//                 alert(`você tera um desconto de 3% ${valorDescon4} valor a pagar ${valorLitro - valorDescon4} reais`);
//             }
//             else if (litros > 20) {
//                 let valorLitro = litros * 5.30;
//                 let valorDescon6 = valorLitro * 0.06;

//                 alert(`você tera um desconto de 3% ${valorDescon6} valor a pagar ${valorLitro - valorDescon6} reais`);
//             }
//             else {
//                 alert("VOCÊ DIGITOU ALGO ERRADO");
//             }
//             break;

//         default:
//             alert("Digite uma opção")
//             break;
//     }

// }
// export function ProdutoDesconto() {
//     let nomeProduto = prompt("Digite um nome do produto");
//     let quantidadeProduto = parseInt(prompt("Digite a quantidade de produto"));
//     let precoUnitario = parseFloat(prompt("Digite o valor da unidade do produto"));
//     let total = (quantidadeProduto * precoUnitario) * 0.02;
//     let total1 = (quantidadeProduto * precoUnitario) * 0.03;
//     let total2 = (quantidadeProduto * precoUnitario) * 0.05


//     if (quantidadeProduto <= 5) {
//         alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario}, você tera um desconto de 2% ${(quantidadeProduto * precoUnitario) * 0.02} reais `);

//     }
//     else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
//         alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario}, você tera um desconto de 3% ${(quantidadeProduto * precoUnitario) * 0.03} reais`);

//     }
//     else {
//         alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario} , você tera um desconto de 5% ${(quantidadeProduto * precoUnitario) * 0.05} reais`);
//     }
// }


// export function Mortalidade() {
//     let tipoDado = parseInt(prompt(`Qual voce deseja calcular
//                             1-Natalidade
//                             2-Mortalidade`));
//     let quantidadeCrianca = parseInt(prompt("Quantas crianças nasceram"));
//     let numeroHabitantes = parseInt(prompt("Quantos habitantes tem?"));
//     let numeroObito = parseInt(prompt("Quantos habiantes morreram?"));

//     switch (tipoDado) {
//         case 1:
//             let taxaNatalidade = (quantidadeCrianca * 1000) / numeroHabitantes;
//             alert(`A quantidade de criança nascidas ${quantidadeCrianca} e a taxa de natalidade ${taxaNatalidade}`);
//             break;
//         case 2:
//             let taxaMortalidade = (numeroObito * 1000) / numeroHabitantes;
//             alert(`A quantidade de óbitos ${numeroObito} e a taxa de mortalidade ${taxaMortalidade}`);
//             break;

//         default:
//             alert("algo deu errado!");
//             break;
//     }
// }

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});