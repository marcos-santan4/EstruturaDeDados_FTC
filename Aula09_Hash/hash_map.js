class HashTable{
    constructor(toStrFn = this.defaultToString) {
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

    loseloseHassCode(key) { 
         if (typeof key === 'number') {
            return key;
         } // verificador se a chave é um numero

         const tableKey = this.toStrFn(key);
         let hash = 0;
         for(let i = 0; i < tableKey.length; i++) {
            hash+=tableKey.charCodeAt(i);
         }
         return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHassCode(key);
    }

    put(key, value) {
        if (key != null && value!= null) {
            const position = this.hashCode(key); 
            this.table[position] = new valuePair(key, value);
            return true;
        }
        return false;
    };

    get(key) {
         const valuePair = this.table[this.hashCode(key)];
         return valuePair == null ? undefined : valuePair.value; 
    }; 

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    };

    size() { // retorna o tamanho do dicionario
        return Object.keys(this.table).length;
    };
    
    isEmpty() { // verifica se o dicionario está vazio
        return this.size() === 0;
    };

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i <keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString
    }
}