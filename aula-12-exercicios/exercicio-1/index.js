function informacoes () { console.log(" Meu nome é Pietro,tenho 17 anos, moro em São Leopoldo e sou estudante")}


informacoes()



function informacoesUsuario (nome,idade,cidade,profissao ) {
   
    console.log (`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
}

    let usuarioNome = prompt( 'qual o seu nome?');
    let usuarioIdade = Number( prompt( ' qual a sua idade?'));
    let usuarioCidade = prompt( ' qual a cidade que você mora?');
    let usuarioProfissao = prompt( ' qual a sua profissao')

informacoesUsuario(usuarioNome,usuarioIdade,usuarioCidade,usuarioProfissao)
