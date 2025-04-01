const robot = require("robotjs");

// Função para simular a digitação de um texto
function digitarTexto(texto) {
    robot.setKeyboardDelay(100); // Delay entre as teclas (em milissegundos)
    robot.typeString(texto); // Digita o texto fornecido
}

// Exemplo de uso
const texto = "Olá, esta é uma digitação automática!";
digitarTexto(texto);
