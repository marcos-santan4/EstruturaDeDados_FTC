class Stack{
    constructor() {
        this.items=[] //metodo que instacia 
    }

    pushStack(element) { //insere um item na ultima posicao da pilha
        this.items.push(element);
    } 

    popStack(){ //remove um item da ultima posicao da pilha
        return this.items.pop();
    }

    peakStack() { //mostra o item q está no topo da pilha
        return this.items[this.items.length - 1];
    } 

    isEmptyStack() { //verificar se a pilha está vazia
        return this.items.length === 0;
    } 
    
    sizeStack() { //mesmo comportamento do metodo .lenght, para ver o tamanho da pilha.
        return this.items.length;
    } 

    clearStack() { // desfazer/apagar a pilha
        this.items = [];
    } 


}