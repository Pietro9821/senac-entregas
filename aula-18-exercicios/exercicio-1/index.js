let numeroDePets = Number(prompt('quantos pets você tem? (reponda com números)'))


if(numeroDePets === 0){
    console.log(' que pena! você pode adotar um pet!')
}

else{
    const nomesDosPets = []

    for( i=1; i <= numeroDePets ; i++){
        let nomeAnimal = prompt( 'digite o nome do animal ')
        
        nomesDosPets.push(nomeAnimal)
    }
        
    console.log( 'nomes dos pets:' , nomesDosPets)
}


