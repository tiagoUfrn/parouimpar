/* Nesta parte do projeto precisamos mesclar os dois primeiros projetos.
    - par ou impar e pedra papel ou tesoura.
- Vou utilizar os códigos que já deram certo e mesclar eles. */
/* ===============================================================
Enunciado da questão pede que:
---> Passo 1 - 
->Nessa versão do jogo é preciso receber o tipo escolhido pelo jogaodr 1
->(par ou impar) e o tipo do jogador 2 é escolhido automaticamente. 
---> Passo 2 -
JOGADOR 1 escolhe um número e o jogador 2 também.
---> Passo 3 -
JOGADOR 1 escolhe as opções "pedra" "papel" ou "tesoura".
-> Ao t serão 5 entradas, fique atento aos detalhes.
                CONDIÇÕES PARA SER O VENCEDOR
                
                ---> JOGADOR 1 vence par ou impar e pedra papel tesoura
                ---> JOGADOR 2 vence par ou impar e pedra papel tesoura
                ---> jogo pedra papel tesoura terminou empatada vence quem ganha par ou impar
                
                CONDIÇÕES     PARA    EMPATAR
                ---> Se cada um venceu um dos dois jogos empata
===============================================================
 */

/* Nesta parte do projeto precisamos mesclar os dois primeiros projetos.
    - par ou impar e pedra papel ou tesoura.
- Vou utilizar os códigos que já deram certo e mesclar eles. */
/* ===============================================================
Enunciado da questão pede que:
---> Passo 1 - 
->Nessa versão do jogo é preciso receber o tipo escolhido pelo jogaodr 1
->(par ou impar) e o tipo do jogador 2 é escolhido automaticamente. 
---> Passo 2 -
JOGADOR 1 escolhe um número e o jogador 2 também.
---> Passo 3 -
JOGADOR 1 escolhe as opções "pedra" "papel" ou "tesoura".
-> Ao tod serão 5 entradas, fique atento aos detalhes.
                CONDIÇÕES PARA SER O VENCEDOR
                
                ---> JOGADOR 1 vence par ou impar e pedra papel tesoura
                ---> JOGADOR 2 vence par ou impar e pedra papel tesoura
                ---> jogo pedra papel tesoura terminou empatada vence quem ganha par ou impar
                
                CONDIÇÕES     PARA    EMPATAR
                ---> Se cada um venceu um dos dois jogos empata
===============================================================
 */

var contador1=0, contador2=0;
var parimpar = prompt("escolha par ou impar: "); // variavel que recebe uma palavra para comparar
//PASSO 2! 
var jogador1 = parseInt(prompt("Jogador 1 Digite um número : ")); // Jogador 1 Digita um número
var jogador2 = parseInt(prompt("jogador 2 Digite um número : ")); // Jogador 2 Digita um número
//PASSO 3! 
var j1 = prompt("Jogador 1 escolha 'pedra' 'papel' ou 'tesoura': "); // Jogador 1 Digita um número
var j2 = prompt("jogador 2 escolha 'pedra' 'papel' ou 'tesoura': "); // Jogador 2 Digita um número

// PASSO 4: Inserindo as condições do jogo
resultado = (jogador1 + jogador2)%2; // variavel que guarda resultado de jogador 1 mais jogador 2


if(resultado % 2 === 0){ // compara se o numero do jogador 1 é par
    if(parimpar === "par"){ // se for par a condição é verdadeira
      contador1++; 
      alert("Jogador 1 venceu no par ou impar"); // imprime o alerta com o resultado do jogador1 vencedor e encerra o programa ou
    
    }else{ // se a condição for falsa e o número for impar pula para a linha de baixo
        contador2++;
        alert("Jogador 2 venceu no par ou impar"); // imprime o resultado impar com o vencedor sendo o jogador 2 
    }
}else{ // caso contrário 
    if(parimpar === "impar"){ // se o jogador 1 escolheu impar e vencer
        contador1++;
      
        alert("Jogador 1 venceu no par ou impar"); // imprime o resultado com o vencedor
    }else{ // caso contrário
        contador2++;
        alert("Jogador 2 venceu no par ou impar"); // o vencedor venceu pois a soma deu um numero par.
    }
    
}


esco2 = ["pedra","papel","tesoura"];

if(esco2){
    if ((j1 ==="pedra") && (j2 ==="pedra")){ // jogador 1 escolhe pedra
    contador1++;
    contador2++;
    alert("\nEmpate no papel, pedra ou tesoura");   
 } else if ((j1 ==="papel") && (j2 ==="papel")){  // jogador 1 escolhe papel
    contador1++;
	contador2++;    
	alert("\nEmpate no papel, pedra ou tesoura");   
 } else if ((j1 ==="tesoura") && (j2 ==="tesoura")){ // jogador 1 escolhe tesoura
    contador1++;
    contador2++;
	alert("\nEmpate no papel, pedra ou tesoura");   
// ---> final da verificação de empate <----    
 } else if ((j1 ==="tesoura") && (j2 ==="papel")){
    contador1++;
    alert("\nJogador 1 venceu no papel, pedra ou tesoura");   // j1 vence
 } else if ((j1 ==="tesoura") && (j2 ==="pedra")){
   contador2++;
    alert("\nJogador 2 venceu no papel, pedra ou tesoura");   
 } else if ((j1 ==="pedra") && (j2 ==="papel")){
   contador2++;
    alert("\nJogador 2 venceu no papel, pedra ou tesoura");   
 } else if ((j1 ==="pedra") && (j2 ==="tesoura")){
    contador1++;
    alert("\nJogador 1 venceu no papel, pedra ou tesoura");  //j1 vence
 } else if ((j1 ==="papel") && (j2 ==="pedra")){  // jogador 1 escolhe papel
  contador1++;
    alert("\nJogador 1 venceu no papel, pedra ou tesoura");  //j1 vence 
 } else if ((j1 ==="papel") && (j2 ==="tesoura")){  // jogador 1 escolhe papel
  contador2++;
    alert("\nJogador 2 venceu no papel, pedra ou tesoura");   
 }
}
if(contador1 === contador2){
alert ("\nResultado Final: Empate");
     }else {
			if(contador2 > contador1){
        alert ("\nResultado Final: Jogador 2 venceu");
    }else {
		if(contador1  > contador2){ 
 			alert ("\nResultado Final: Jogador 1 venceu");
}
}
}
