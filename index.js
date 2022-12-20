const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65) {
  console.log("Você pode se aposentar!");
} else if (tempo >= 30){
  console.log("Você pode se aposentar!");
} else if (idade >= 60 && tempo >= 25) {
  console.log("Você pode se aposentar!");
} else{
  console.log("Você não pode se aposentar!");
}
// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
if (tempo > 20) {
  if((idade >= 65) || (tempo >=30) || (idade >= 60 && tempo >= 25)){
    salario *= 0.8;
  }
}else if(tempo <= 20) {
  if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >=25)){
    salario *= 0.6;
  }
}
// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
if (salario < 1212) {
  if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >=25)){
    salario = 1212.00;
    console.log("Seu salário será de: ", salario);}
}else if(salario > 7087.22) {
  if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)){
    salario = 7087.22;
    console.log("Seu salário é de: ", salario);}
}else {
  console.log("Seu salário será de: ")
}