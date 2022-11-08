const res = document.getElementById('res');
let number1 = 0;
let number2 = 1;
var sum = [];

function start() {
    res.innerHTML = ` `;
    for(let i=0; i<20; i++) {
        sum[i] = number1 + number2;
        number1 = sum[i];
        number2 = sum[i]-number2;
    }
    for(let i=0; i<20; i++) {
        res.innerHTML += `${sum[i]}<br>`;
    }
}