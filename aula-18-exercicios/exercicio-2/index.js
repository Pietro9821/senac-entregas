    const numeros = [1,2,3,4,5,6,7,8,9,10]

    function numerosMesmaLinha (arr){
        console.log(...arr)
    }

        console.log('lista:')
        numerosMesmaLinha(numeros)

    function divisaoPorDeaz (array){
       for( i = 0 ; i <array.length ; i++){
         
            const divisao = array[i] / 10

            console.log( divisao)
       } 
    }

        console.log( ' lista dividida por dez:')
        divisaoPorDeaz(numeros)

    function arrayPar (array){
        const par = []
        for ( i =0 ; i<array.length; i ++){

            if ( array[i] % 2 === 0){
             par.push(array[i])
            }
        }
        console.log(par)
    }

    console.log('lista par:')
     arrayPar(numeros )

         function arrayString (array) {
            const novoarray = []
            for (i = 0 ; i < array.length ; i++){
                novoarray.push(`O elemento na posição ${i} é : ${i} .`)
            }
                console.log(...novoarray)
        }
    
         console.log( '-------')
         arrayString(numeros)


            function maiorMenor (array){
                let maior = [0]
                let menor = [0]
                for ( i = 1 ; i < array.length ; i++){
                     if(array[i] > maior){
                        maior = array[i]
                     }
                    if (array[i] < menor){
                        menor = array[i]
                    }
                }

                    console.log(` o maior número é : ${maior}`)
                    console.log( `o menor número é: ${menor}`)
             }

             console.log('Maior e Menor número do aaray original:')
            
                maiorMenor(numeros)
        