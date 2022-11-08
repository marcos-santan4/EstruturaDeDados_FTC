const res = document.getElementById("res");

function decimalToBinary() {
    let decNumber = Number(document.getElementById('number1').value);
    const remStack = new Stack();
    let number = Number(decNumber);
    let rem = 0;
    let binaryString = '';
    while(number>0) {
        rem = Math.floor(number%2);
        remStack.pushStack(rem);
        number = Math.floor(number/2);
    }
    
    while(!remStack.isEmptyStack()){
        binaryString+=remStack.popStack().toString();
    }
    
    res.innerHTML = `<h2>O numero ${Number(decNumber)} em binário é = ${binaryString}</h2>`
}

/* function exibir() {
    decimalToBinary(num2);
} */

// take input let number = prompt('Enter a decimal number: '); convertToBinary(number);

// o ngc ai é o seguinte, coloca no array a palavra, coloca em outro array inverte esse último e compara já foi - comentario Silas

// fazer um verificador de palidromo - atividade proposta pelo professor.

//let decNumber = Number(prompt('Digite um numero a ser convertido: '));