let turno = prompt( 'qual turno você estuda? M(matutino),V(vespertino),N(noturno)').toUpperCase()

switch  (turno) {
case  'M':
console.log( ' Bom dia!')
break

case 'V':
console.log('Boa tarde!')
break

case 'N':
console.log( ' Boa noite!')
break

default:
console.log( 'Boa aula!')
}


