function diaSemana(num) {
    switch (num) {
        case 1:
            return 'Fim de semana - Domingo'

        case 2:
            return 'Dia útil - Segunda-Feira'

        case 3:
            return 'Dia útil - Terça-Feira'

        case 4:
            return 'Dia útil - Quarta-Feira'

        case 5:
            return 'Dia útil - Quinta-Feira'

        case 6:
            return 'Dia útil - Sexta-Feira'

        case 7:
            return 'Fim de Semana - Sabado'

        default:
            return 'Dia inválido'
    }
}

console.log(diaSemana(8))