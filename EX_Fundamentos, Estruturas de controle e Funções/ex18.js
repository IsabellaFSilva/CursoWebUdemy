function extenco(numero) {
    switch (numero) {
        case 0:
            return console.log('Zero')
        case 1:
            return console.log('Um')
        case 2:
            return console.log('Dois')
        case 3:
            return console.log('Três')
        case 4:
            return console.log('Quatro')
        case 5:
            return console.log('Cinco')
        case 6:
            return console.log('Seis')
        case 7:
            return console.log('Sete')
        case 8:
            return console.log('Oito')
        case 9:
            return console.log('Nove')
        case 10:
            return console.log('Dez')
        default:
            return console.log('Número fora do intervalo')
    }
}

extenco(0)
extenco(10)
extenco(11)