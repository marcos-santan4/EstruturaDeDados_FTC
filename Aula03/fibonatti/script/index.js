let number1 = 0;
let number2 = 1;
var sum = [];

for(let i=0; i<20; i++) {
    sum[i] = number1 + number2;
    number1 = sum[i];
    number2 = sum[i]-number2;
}

for(let i=0; i<20; i++) {
    console.log(`${sum[i]} <br>`);
}

// Deu trabalho pra racionar mas consegui, codigo legitimo
// Esse arquivo aqui 