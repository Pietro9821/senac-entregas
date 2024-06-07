
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	console.log("Função de cadastro")


	let nomeAbrigo = prompt('insira o nome de um abrigo')
	let enderecoAbrigo = prompt('insira o endereco do abrigo')
	let cidadeAbrigo = prompt('insira o endereco do abrigo')
	let telefoneAbrido = prompt (' insira o telefone do abrigo')
	let capacidadeAbrigo = prompt (' insira a capacidade de lotacao do abrigo')

	const cadastroCompleto = {
		nome : nomeAbrigo,
		cidade : cidadeAbrigo,
		telefone :telefoneAbrido,
		endereco : enderecoAbrigo,
		capacidade : capacidadeAbrigo,
	}
	

	dados.push(cadastroCompleto)
}


// Função para listar
function listar() {
	console.log("Função de lista")
	if (dados.length===0){
	console.log('nenhum abrigo encontrado.')
	return
	}
	}	
	console.log('abrigos encontrados:')
	for(let i = 0; 1<armazenarCadastro.length;i++){
	const abrigo = armazenarCadastro[i]
	console.log( 'Nome:',dados[1])
	console.log('cidade:',dados[2])
	console.log('telefone:',dados[3])
	console.log( 'endereço:',dados[4])
	console.log('capacidade:', dados[5])
	}

// Função para buscar
function buscar() {
	console.log("Função de busca")
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}
}
