function calcular(val1, operador, val15) {
    switch (operador) {
        case '+':
            return val1 + val15

        case '-':
            return val1 - val15
        
        case '*':
            return val1 * val15

        case '/':
            return val1 / val15
        default:
            return 'Operação invalida'
    }
}

console.log(calcular(15, '+', 5));
console.log(calcular(15, '-', 5));
console.log(calcular(15, '*', 5));
console.log(calcular(15, '/', 5));
console.log(calcular(15, '--', 5));