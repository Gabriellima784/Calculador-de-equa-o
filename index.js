//Três variaveis são definidas cada uma recebendo o respectivo valor indicado
//Nessa situação o usuario pode optar por exibir o código com impressão do resultado ou com todas as iterações.

let indice = 13; 
let soma = 0;
let K = 0; 


//Aqui o código entra no modo While Loop, que tem seu controle estabelecido pela variável K 
while (K< indice) { //Enquanto K for menor que a varíavel indice o loop continuará sendo executado
    K = K + 1;  
    soma = soma + K; //A cada execução o valor +1 é incrementado a variavel soma e é atualizado com seu valor
} 

//Quando o "K" atinge o valor do indice a execução do loop while é encerrada
//Nesse caso o valor exibido será 91 que é a soma dos números inteiros de 1 a 13 

console.log (soma);

//Como é efetuada a soma?
// Na primeira iteração do loop, o 'K' tem o valor 1 e 'Soma' tem o valor 0 então Soma + K logo 0 + 1 = 1 
// Na segunda iteração do loop, o 'K' tem o valor 1 e 'Soma' é atualizado para Soma + K logo 1 + 2 = 3 
// Essa equação é repetida até atingir o valor 13 que é o valor de indice, ao atingir o valor 13 o resultado, de soma é atualizado para 78 ou seja 78+13 = 91

//Podemos tornar essse código melhor ainda, ao invés de exibirmos a iteração apenas no resultado final, podemos exibir a iteração linha por linha até chegar ao resultado de 91. 

document.addEventListener('DOMContentLoaded', function() {
    let novoindice = 13;
    let novasoma = 0; 
    let resultadoDiv = document.getElementById("resultado"); // Referência ao HTML
    let iteracoesButton = document.getElementById("iteracoes-button"); // Referência do botão para exibir todas as iterações
    let resultadoButton = document.getElementById("resultado-button"); // Referência do botão para exibir somente o resultado
  
    resultadoButton.addEventListener("click", function() {
        resultadoDiv.innerHTML = "Resultado Final: " + novasoma;
    });

    iteracoesButton.addEventListener("click", function() {
        resultadoDiv.innerHTML = ""; 
        let K2 = 0;
        novasoma = 0;
        while (K2 < novoindice) {
            K2 = K2 + 1;
            novasoma = novasoma + K2;
            resultadoDiv.innerHTML += "K = " + (K2 - 1) + " + " + K + " = " + novasoma + "<br>";
        }
    });
});

  