let turno = prompt( 'qual turno você estuda? M(matutino),V(vespertino),N(noturno)').toUpperCase()

if (turno === 'M') {
console.log( 'Bom dia!')
}

else if (turno === 'V') {
console.log('Boa tarde!')
}

else if (turno === 'N') {
console.log( 'Boa noite!')
}

else {
console.log( ' Boa aula!')
}