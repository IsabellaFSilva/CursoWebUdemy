function jurosSimples(capInicial, taxJuros, temAplicacao){
    return capInicial + (capInicial * taxJuros * temAplicacao)
}

function jurosCompostos (capitalInicial, taxJuros, temAplicacao) {
    return capitalInicial * (1 + taxJuros) ** temAplicacao;
}

console.log(jurosSimples(100, 10/100, 2).toFixed(2));
console.log(jurosCompostos(100, 10/100, 2).toFixed(2));