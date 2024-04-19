let primeiroNumero = Number( prompt( ' insira um numero'));
let segundoNumero = Number( prompt( ' insira outro numero'));

let maior = primeiroNumero > segundoNumero
let igual = primeiroNumero === segundoNumero
let divisivelUm = primeiroNumero%segundoNumero=== 0
let divisivelDois = segundoNumero%primeiroNumero===0

console.log( ' primeiro numero e maior que o segundo:' , maior)
console.log( ' o primeiro numero e igual ao segundo:' , igual)
console.log( 'o primeiro numero e divisivel pelo segundo: ' , divisivelUm)
console.log( ' o segundo numero e divisivel pelo primeiro:' , divisivelDois)