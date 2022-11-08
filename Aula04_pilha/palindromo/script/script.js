function verificador() {
    const res = document.getElementById('res');
    const palindromo = document.getElementById('word');

    res.innerHTML = `${verificadorPalindromo(palindromo.value)}`;
}

function verificadorPalindromo(texto) {
    const pilha = new Stack();

    for(let i = 0; i<texto.length; i++) { //Adiciona por letra no array
        pilha.pushStack(texto.charAt(i));
    }

    let inverse = "";
    while(!pilha.isEmptyStack()) { //verifica se nao esta vazia, removendo os elementos e adicionando em uma variavel
        inverse += pilha.popStack();
    }

    if (texto.length === 0 || texto.length === 1) {
        return `🤦‍♀️🤦‍♂️ Valor invalido para ser verificado! 🤦‍♂️🤦‍♀️`;
    } else if (inverse.localeCompare(texto)) { // verifica se o texto no inverso é igual ao texto digitado. 
        return `😭😭 "${texto}" nao é palindromo 😭😭`;
    } else if (!inverse.localeCompare(texto)){
        return `🥳😎 "${texto}" é palindromo 😎🥳`;
    }

}


