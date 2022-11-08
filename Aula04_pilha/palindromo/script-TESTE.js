

function Palindromo () {
    const text = document.querySelector('#word1');
    const res = document.querySelector('#res');
    
    /* console.log(text.value);
    pilha.pushStack(text); */

    res.innerHTML = `${text.value} ${verificadorPalindromo(text)}`

}      

function verificadorPalindromo(texto) {
    const pilha = new Stack();

    for(let i = 0; i<texto.length(); i++) {
        pilha.pushStack(texto.charAt(i));
    }

    let inverse = '';
    while(!pilha.isEmptyStack()) {
        inverse += pilha.popStack();
    }

    if (inverse.localeCompare(texto)) { // verifica se o texto no inverso é igual ao texto digitado. 
        return 'é palindromo';
    } else {
        return 'nao é palindromo';
    }

}
