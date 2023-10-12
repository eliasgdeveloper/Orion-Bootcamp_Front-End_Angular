/**
 * Função que conta a quantidade de vogais em um texto.
 *
 * @param texto - O texto do qual deseja-se contar as vogais.
 * @returns O número de vogais no texto.
 */
function contarVogais(texto) {
    // Cria uma nova variável para armazenar o valor em minúsculas
    var textoLowerCase = texto.toLowerCase();
    var vogais = "aeiouAEIOU";
    var contador = 0; // Inicializa o contador de vogais
    for (var i = 0; i < textoLowerCase.length; i++) {
        var letra = textoLowerCase[i];
        // Verifica se a letra é uma vogal
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

// a) Exemplo de uso com um texto fornecido como parâmetro da função.
var exemplo = "Bootcamp Orion";
var quantidadeVogais = contarVogais(exemplo);
var resultado = "Exemplo: O texto '" + exemplo + "' tem " + quantidadeVogais + " vogais.";

// Atualize o elemento HTML com o ID 'resultadoBootcamp' com o valor da variável 'resultado'.
document.getElementById('resultadoBootcamp').innerHTML = resultado;

// b) Exemplo de uso com um texto fornecido via input no formulário.
// Obter elementos HTML
var textoInput = document.getElementById("textoInput");
var contarButton = document.getElementById("contarButton");
var resultadoElement = document.getElementById("resultado");
// Adicionar um ouvinte de evento de clique ao botão "Contar Vogais"
contarButton.addEventListener("click", function () {
    // Obter o texto inserido pelo usuário a partir do campo de entrada
    var texto = textoInput.value;
    // Chamar a função contarVogais para contar as vogais no texto
    var quantidade = contarVogais(texto);
    // Atualizar o conteúdo do elemento de resultado com a mensagem
    resultadoElement.textContent = "O texto '".concat(texto, "' tem ").concat(quantidade, " vogais.");
});
