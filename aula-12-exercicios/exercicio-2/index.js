function numeros (numero1 , numero2 ) { const soma = numero1+numero2
return soma
}
//  teste
 console.log(numeros( 2,4))

 function numerosIguais ( n1 , n2) { const igual = n1 >= n2 
return igual }
 //teste
console.log(numerosIguais(2,3))


function numeroPar ( par1,) { const provaReal = (par1%2)===0
return provaReal
 }
// teste 
console.log( numeroPar(2,))


function imprimir ( mensagem) { 
const tamanho = mensagem.length
const maiuscula = mensagem.toUpperCase()

console.log( tamanho , maiuscula )

}

imprimir( 'olá, mundo')