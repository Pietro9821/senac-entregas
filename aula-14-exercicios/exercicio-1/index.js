const pessoa = {
nome : 'Pietro',
apelido :[ 'pipi',' biro-biro','pietrão de carne'] ,
}

function imprimirMensagem(objeto) {
const imprimir = console.log( `Eu me chamo ${objeto.nome} , mas pode me chamar de: ${objeto.apelido[0]},${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
return imprimir
}

console.log( imprimirMensagem(pessoa))

const apelidosNovos = { ...pessoa ,
     apelido : [ 'pi',' pê','pito']}


console.log( imprimirMensagem(apelidosNovos))