 class Dictionary{
    constructor(toStrFn = this.defaultToString) { //constructor para transformar um valor em string
        this.toStrFn = toStrFn;
        this.table = {};
    }

    defaultToString(item) {
        if (item===null) {
            return 'NULL';
        } else if (item === undefined) {
            return 'UNDEFINED';
        } else if (typeof item === 'string' || item instanceof String) {
            return `${item}`;
        }
        return item.toString();  
    };

    hasKey(key) { //verifica se existe alguma chave quando for inserir ou remover
        return this.table[this.toStrFn(key)]!= null; // retorna false ou true
    };

    set(key, value) {
        if(key!=null && value!=null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new valuePair(key, value);
            return true;
        }
        return false;
    }; 

    remove(key) {
        if(this.hasKey(key)) { // se houver a chave pesquisava, ele retornará true
            delete this.table[this.toStrFn(key)]; // e esse valor será removido.
            return true;
        }
        return false;
    };

    get(key) { // pega o elemento/informacao atraves/adicionado da/na chave no dicionario
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    };

    get2(key) {
        if(this.hasKey(key)) {
            return this.table[this.toStrFn(key)];
        }
        return undefined;
        // return this.hasKey(key) == true ? this.table[this.toStrFn(key)] : undefined;
    }

    clear() { // limpa o dicionario
        this.table = {}; 
    };
    
    size() { // retorna o tamanho do dicionario
        return Object.keys(this.table).length;
    };
    
    isEmpty() { // verifica se o dicionario está vazio
        return this.size() === 0;
    };
    
    keys() { // retorna todas as chaves que estão presentes dentro do dicionário
        return this.keyValues().map(valuePair => valuePair.key); // map - serve para pegar cada objeto de keyvalores e vai atribuir aos valors que vamos trabalhar e posteriormente exibi-los. funciona como o for, intera e pega todos os elementos
    };
    
    values() { // retorna todos os valores que estão presentes dentro do objeto/dicionário
        return this.keyValues().map(valuePair => valuePair.value);
    };
    
    keyValues() { //retorna todas as informações dentro de um objeto - retorna tanto a chave e o valor ordenado  (dois conceitos)
        return Object.values(this.table);  
    };
    
    forEach(callbackFn) { // fazer a interação sobre todos os metodos da classe dicionario
          const valuePairs = this.keyValues();
          for(let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
          }
    };

    toString() {
        if(this.isEmpty()) {
            return "";
        }

        const valuePairs = this.keyValues();
        let objectString = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++) {
            objectString = `${objectString}, ${valuePairs[i].toString()}`;
        }
        return objectString;
    };
} 