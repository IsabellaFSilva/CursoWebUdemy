function escolherVeiculo(tipoVeiculo) {
    switch (tipoVeiculo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(escolherVeiculo('hatch'))
