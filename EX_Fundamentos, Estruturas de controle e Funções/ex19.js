function cardapio(cod, qtd) {
    switch (cod) {
        case 100:
            qtd = qtd * 3.00
            return console.log(qtd)
        case 200:
            qtd = qtd * 4.00
            return console.log(qtd)
        case 300:
            qtd = qtd * 5.50
            return console.log(qtd)
        case 400:
            qtd = qtd * 7.00
            return console.log(qtd)
        case 500:
            qtd = qtd * 3.50
            return console.log(qtd)
        case 600:
            qtd = qtd * 2.80
            return console.log(qtd)
        default:
            return console.log('Produto não existente')
    }
}

cardapio(600, 3)