//par nome/valor
const saudacao = 'Opa' //contexto léxico

function exec(){
    const saudacao = 'Fala'//contexto léxico
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Isabella',
    idade: 24,
    endereco: {
        logradouro: 'Rua ACM',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)