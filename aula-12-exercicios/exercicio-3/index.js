let numeroUsuario1 = Number( prompt( ' insira um número'))
let numeroUsuario2 = Number( prompt(' insira outro número'))

function soma (a,b) { 
    const soma = a + b 
    return soma
}

 console.log( 'soma:', soma( numeroUsuario1,numeroUsuario2))


function subtracao ( a,b) { 
const diminuir = a -b
return diminuir
}

console.log(  'subtração:',subtracao(numeroUsuario1,numeroUsuario2))

function multiplicacao (a,b) { 
    const multiplicar = a*b
    return multiplicar
}

console.log('multiplicação:' ,multiplicacao( numeroUsuario1,numeroUsuario2))

function divisao ( a,b ) { 
const dividir = a/b
return dividir
}

console.log('divisão:' ,divisao( numeroUsuario1,numeroUsuario2))