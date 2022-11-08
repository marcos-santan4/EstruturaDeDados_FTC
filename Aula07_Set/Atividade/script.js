const setA = new Set();
const setB = new Set();

setA.add('Banana');
setA.add('Uva');
setA.add('Laranja');
setA.add('Maça');
setA.add('Pera');

setA.delete('Pera'); // pq pera é rui

console.log(setA);

setB.add('Alface');
setB.add('Cebolinha');
setB.add('Couve');
setB.add('Salsa');
setB.add('Coentro');

console.log(setB);

console.log(setA.union(setB).values());

// console.log(setA.sizeLegacy());
// console.log(valuesLegacy());

