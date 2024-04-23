let listaDeTarefas = []
let tarefaUm = prompt( ' cite uma tarefa que você precisa realizar no seu dia:')
let tarefaDois = prompt(' cite outra tarefa:')
let tarefaTres = prompt( ' cite outra tarefa:')

listaDeTarefas[0]=tarefaUm
listaDeTarefas[1]=tarefaDois
listaDeTarefas[2]=tarefaTres

console.log( ' tarefas:',listaDeTarefas)

let indices = prompt( ' qual tarefa você já realizou, 0 , 1 ou 2?')
let remocao = listaDeTarefas.splice( indices,1)

console.log( ' tarefa realizada:', remocao)
console.log( 'lista de tarefas:' ,listaDeTarefas)