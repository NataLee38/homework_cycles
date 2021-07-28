// Найти сумму чисел от 1 до 10

let result = 0;
let i = 1;

for (let i = 1; i <= 10; i++) {
    result += i;
    console.log(result);
}

while (i <= 10) {
    result += i;
    console.log(result);
    i++;
}

do {
    result += i;
    console.log(result);
    i++;
} while (i <= 10);
