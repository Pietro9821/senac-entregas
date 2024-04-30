let carrinho = []

const fruta1 = {
nome : ' banana',
disponibilidade : true
}

const fruta2 = {
nome : ' maçã',
disponibilidade : true
}

const fruta3 = {
nome : 'manga',
disponibilidade : false 
}

function meuCariinho (objeto) {
carrinho.push(objeto)
}

meuCariinho(fruta1)
meuCariinho(fruta2)
meuCariinho(fruta3)

console.log( carrinho)