//false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!0); // false
console.log(!!''); // false
console.log(!!NaN); // false

//true
console.log(!!-1); // true
console.log(!!' '); // true
console.log(!!{}); // true
console.log(!![]); // true
console.log(!!Infinity); // true
console.log(!!(function () { })); // true
console.log(!!(new Date())); // true
console.log(!!(/a/)); // true
console.log(!!(new Boolean(true))); // true
console.log(!!(new Number(1))); // true
console.log(!!(new String('a'))); // true
console.log(!!(new Boolean(false))); // true
console.log(!!(new Boolean(undefined))); // true


console.log('Name padrão');


// com o || ele sempre retrona o primeiro valor verdadeiro
let nome = 'João';
console.log(nome || 'Desconhecido'); // João