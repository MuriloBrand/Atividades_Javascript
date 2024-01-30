// Pede a idade ao usuário
var idade = prompt("Qual é a sua idade?");

// Converte a entrada para um número inteiro
idade = parseInt(idade);

// Verifica a idade e exibe a mensagem apropriada
if (idade < 18) {
    alert("Você é menor de idade.");
} else if (idade === 18) {
    alert("Você acabou de atingir a maioridade.");
} else {
    alert("Você é maior de idade.");
}
