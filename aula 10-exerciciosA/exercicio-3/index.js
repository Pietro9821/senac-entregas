let listaDeTarefas = []
let tarefaUm = prompt( ' cite uma tarefa que você precisa realizar no seu dia:')
let tarefaDois = prompt(' cite outra tarefa:')
let tarefaTres = prompt( ' cite outra tarefa:')

listaDeTarefas.push( tarefaUm,tarefaDois,tarefaTres)

console.log( ' tarefas:',listaDeTarefas)

let indices = Number(prompt( ' qual tarefa você já realizou, 1 , 2 ou 3?'))
indices-= indices=1

let tarefaRealizada = listaDeTarefas.splice( indices,1)

console.log( ' tarefa realizada:', tarefaRealizada)
console.log( 'lista de tarefas:' ,listaDeTarefas)