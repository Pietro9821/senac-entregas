let generoFilme = prompt( ' qual o gênero do filme que você irá assistir').toUpperCase()
let preco = Number(prompt( ' quanto custa o ingresso?'))
const precoAcessivel = 15

if (generoFilme==='FANTASIA' && preco < precoAcessivel){
console.log('Bom filme!')
}

else {
console.log( 'Escolha outro filme, de preferência fantasia e que custe menos de 15 $(')
}