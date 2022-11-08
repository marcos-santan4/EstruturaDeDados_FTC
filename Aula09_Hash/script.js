const hash = new HashTable();

hash.put('Gabriel', 'gabriel@unex.br');
hash.put('Nicolas', 'nicolas@unex.br');
hash.put('Victor', 'victor@unex.br');
hash.put('Hugo', 'hugo@unex.br');
hash.put('Vitorugo', 'vitorugo@unex.br');

console.log(hash.hashCode('Gabriel') + ' - Gabriel');
console.log(hash.hashCode('Nicolas') + ' - Nicolas');

console.log(hash.get('Nicolas'));
console.log(hash.get('Silas'));

console.log(hash.toString());