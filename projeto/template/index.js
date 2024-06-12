
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	console.log("Função de cadastro:")


	let nomeAbrigo = prompt('insira o nome de um abrigo').toUpperCase()
	let enderecoAbrigo = prompt('insira o endereço do abrigo').toUpperCase()
	let cidadeAbrigo = prompt('insira a cidade  do abrigo').toUpperCase()
	let telefoneAbrido = prompt (' insira o telefone do abrigo')
	let capacidadeAbrigo = prompt (' insira a capacidade de lotação do abrigo')

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
	console.log("Função de lista:")
	console.log(' Abrigos encontrados:')
	if (dados.length===0){
		console.log('nenhum abrigo encontrado.')
		return
	}

		for(let i = 0; i < dados.length; i++){
		const abrigo = dados[i]
			console.log( 
			`Nome: ${abrigo.nome} 
			*Cidade: ${abrigo.cidade} 
			*Endereço: ${abrigo.endereco}  
			*Telefone: ${abrigo.telefone} 
			*Capacidade: ${abrigo.capacidade} pessoas`)
			console.log('---------------------')
		}
}


// Função para buscar
function buscar() {
	console.log("Função de busca:")

	const cidadeUsuario = prompt('Em qual cidade você está?').toUpperCase()
	
	 for(let i = 0; i < dados.length; i++){
		const abrigo = dados[i]

		if ( cidadeUsuario === abrigo.cidade){
				console.log( 'abrigos encontrados em', cidadeUsuario,':')
				console.log( 
				`Nome: ${abrigo.nome} 
				*Cidade: ${abrigo.cidade} 
				*Endereço: ${abrigo.endereco}  
				*Telefone: ${abrigo.telefone} 
				*Capacidade: ${abrigo.capacidade} pessoas`)
				console.log('---------------------')
		}	
	}

	
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
