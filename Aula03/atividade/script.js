// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

function executar() {
    const array = [];
    const texto = document.getElementById('texto');

    for(let i=0; i<3; i++) {
        array.push(Number(prompt("Informe um numero")));   
    }

    texto.innerHTML = array;
}
