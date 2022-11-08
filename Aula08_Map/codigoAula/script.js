const dictionary = new Dictionary();

dictionary.set('Silas', 'silas@ftc.edu.br');
dictionary.set('Iago', 'Iago@ftc.edu.br');

dictionary.set('Sabrina', 'Sabrina@ftc.edu.br');
dictionary.set('Juliel', 'Juliel@ftc.edu.br');
dictionary.set('Mateus', 'Mateus@ftc.edu.br');
dictionary.set('Luis', 'Luis@ftc.edu.br');
dictionary.set('Lucas', 'Lucas@ftc.edu.br');

console.log(dictionary.hasKey('Silas'));

console.log(dictionary.get('Silas'));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

let count=0;
dictionary.forEach((k,v)=>{
    console.log(`${++count} Linha: Name:${k}, E-mail:${v}`);
});