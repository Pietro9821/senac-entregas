const pessoa1 = {
nome : 'Pietro',
idade : 17 ,
profissao : ' Estudante '
}

const pessoa2 = {
nome : ' Marcos',
idade: 41,
profissao: ' metalúrgico'
}

function minhaFuncao(objeto) {
const resultado = [  objeto.nome ,
objeto.nome.length ,
objeto.idade,
objeto.profissao,
objeto.profissao.length]
return resultado
}

console.log( minhaFuncao(pessoa1))

console.log(minhaFuncao(pessoa2) )


