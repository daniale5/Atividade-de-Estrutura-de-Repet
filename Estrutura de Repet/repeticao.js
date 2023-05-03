console.log("Exemplo com DECREMENTO da variável i"); 

for(let i = 5; i > 0; i--){ // decrementando
    console.log(i); 
}

// o código acima imprime o valor da variável i e a decrementa até o valor de i ser igual 0 | output = 5 4 3 2 1 
console.log("Exemplo com INCREMENTO da variável i"); 
 
for(let i = 0; i < 5; i++){ // incrementando
    console.log(i); 
}
// O código acima imprime o valor da variável i e a incrementa até que o valor de i seja igual a 5 | output = 0 1 2 3 4

console.log("Podemos usar o FOR para buscar valores em VETORES/ARRAYS"); 

let marcas = ["Asus","LG","Acer","Dell"];
let t = marcas.length; // pega o tamanho do vetor, ou seja, a quantidade de valores, no caso 4

for(let x = 0; x < t; x++ ) { // a variável t possui o tamanho do vetor, serve exatamente para que o FOR só para quando ele imprimir o último valor/elemento do vetor
    console.log(marcas[x]);
}

console.log("--- Estrutura de Repetição WHILE ---"); 

  let control = 0;     // variavel de controle 
  while(control < 6){     // condição de repetição
   console.log(`${control} - js`);    // comandos do bloco serão executados enquanto a condição acima for verdaeira 
   console.log();    // imprime o valor atual da variável de controle | valor impresso apenas para entendimento
   control++;    // operação de incremento
  }
 // output : 0 - js 1 - js ... 5 - js
 // obs: console.log(`${control} - js`); -> esta sintaxe se chama template string, é uma outra forma de juntar(concatenar) variável com string 

 // pegando valores de Vetores usando While
 let modelos = ["LG","Samsung","Microsoft","Apple","Acer"]; 

 let cont = 0;
 // na linha abaixo em vez de criar uma variável para armazenas o tamanho do vetor, usei direto a sintaxe(modelos.length) que obtem este tamanho 
 while(cont < modelos.length){ 
  console.log(cont+ '-' +modelos[cont]);
  cont++;
 }
// output: 0-LG 1-Samsung ... 4-Acer 
// obs: É pouco comum usar o While para percorrer Vetores como o exemplo acima

// se a condição do While for sempre verdadeira, a execução do programa fica presa no While

console.log("--- Estrutura de Repetição DO-WHILE ---"); 

do {
  console.log("Executado pelo menos uma vez"); 
}while(false) 
// output: executado pelo menos uma vez
//a condição do while vai ser falsa sempre, mesmo assim a frase foi impressa uma vez

console.log("--- Estrutura de Repetição FOR IN ---"); 

let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

   for(let prop in objeto) {
      console.log("Linguagem: "+ prop +" - "+objeto[prop]);
   } 
   // output: linguagem: 1 - C linguagem: 2 - python ... linguagem: 5 - PHP 

console.log("--- Percorrer Objetos ---"); 
  const pessoa = { 
		nome:"Maria",
		idade:20,
		peso:65,
		altura:1.7
	   } 
  
  //console.log(pessoa.idade); // acesso manualmente
   for(let atributo in pessoa){ // 
    	console.log(pessoa[atributo]);
    }
// output: Maria 20 65 1.7

console.log("--- For In para Interar Vetores ---"); 

let marcas2 = ["LG","Samsung","Microsoft","Apple","Acer"];

   for(let element in marcas2) {
      console.log("Index: "+element+" - "+marcas2[element]);
   } // output: Index: 0 - LG Index: 1 - Samsung ... Index: 4 - Acer

console.log("--- Estrutura de reptição For Of ---"); 

let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let curso of cursos){
    console.log("Faculdade: - "+ curso);
}
// output : Faculdade: - Ciências da Computação Faculdade: - Análise de Sistemas ... Faculdade: - Engenharia de Software 

let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value); // valores da variável value não podem ser modificados  
}
// output: 10 20 30

console.log("--- Usando FOR OF para Arrays de Objetos ---"); 

  const infoPessoa = [ 
		   {nome: "Robison", idade: 18, altura:1.8},
		   {nome: "William", idade: 28, altura:1.6},
		   {nome: "Janaina", idade: 19, altura:1.5},
		   {nome: "Carla", idade: 25, altura:1.9},
		   {nome: "Maíra", idade: 32, altura:1.4},
         ];

    for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
} // output : Robinson-18-1.8 William-28-1.6 ...  Maíra-32-1.4

console.log("--- Estrutura de Repetição ForEach ---"); 

// O método forEach() permite executar uma função para cada elemento presente em um array.

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor

function tabuadaDe2(item) {  // esta função será executada para cada elemento do array 
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);
//  output : 0 2 4 6 8 .... 20, ou seja, a tabuade de 2

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; // adiciona o valor de cada item do array 
    console.log("Posição:" + indice + " - Soma = " + total); 
}


numeros.forEach(somar); // output: posição:0 - soma = 0 posição:1 - soma = 1  posição:2 - Soma = 3 ... posição:10 - soma = 55

// podemos usar forEach para percorrer Arrays

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"]; 

modelPhones.forEach(function(item,indice){ 
   console.log(indice+" = "+ item); // para cada item do vetor, imprime o índice e valor dessa posição 
}); 
// output : 0 = A31 1 = MotoOne ... 4 = Redmi 