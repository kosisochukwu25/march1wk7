const efosa = document.querySelectorAll('ol li')
const aramide= document.querySelector('p')

const names= ['peter', 'johne' ,'paul', 'aramide','marie' ]

const letters = aramide. textContent
// alert(letters)
// length propertys
efosa[0].innerHTML= '<strong>Length property: </strong>' + letters.length
efosa[1].innerHTML= '<strong>First character: </strong>' + letters[0]
efosa[2].innerHTML= '<strong>Last character: </strong>' + letters [letters.length -1]
efosa[3].innerHTML= '<strong>Index of a particular str: </strong>' + letters.indexOf('X')
efosa[4].innerHTML= '<strong>Index of particlar str: </strong>' + letters.indexOf('O', letters.indexOf('dog'))
efosa[4].innerHTML= '<strong>Index of particlar str: </strong>' + letters.indexOf('o', letters.indexOf('dog'))
efosa[5].innerHTML= '<strong>Index of particlar str: </strong>' + letters.indexOf('o', letters.indexOf('jump'))
efosa[6].innerHTML= '<strong>Index of a str that dose not exist: </strong>' + letters.indexOf('o')
efosa[7].innerHTML= '<strong>Uppercase: </strong>' + letters.toUpperCase()
efosa[8].innerHTML= '<strong>Lowercase: </strong>' + letters.toLowerCase()
efosa[9].innerHTML= '<strong>Find character at a particular index: </strong>' + letters.charAt(10)
efosa[10].innerHTML= '<strong>Replace \'jump\' with \'walk\': </strong>' + letters.replace('jump', 'walk')
efosa[11].innerHTML= '<strong>Replace all \'o\' with \'0\': </strong>' + letters.replace('o', '0')
efosa[12].innerHTML= '<strong>Coverts a str to an array: </strong>' + letters.split(' ')
efosa[13].innerHTML= '<strong>Cut a part of is str: </strong>' + letters.slice(letters.lastIndexOf('the'))
efosa[14].innerHTML= '<strong>Cut all str: </strong>' + letters.slice()
efosa[15].innerHTML= '<strong>add array: </strong>' + letters.concat(...names)
efosa[16].innerHTML= '<strong>add a name: </strong>' + 'omordi'.concat('kosiso')
efosa[17].innerHTML= '<strong>name that starts with \'p\': </strong>' + names.filter(name =>name.startsWith('p'))
efosa[18].innerHTML= '<strong>name that end with \'e\': </strong>' + names.filter(name =>name.endsWith('e'))
efosa[19].innerHTML= '<strong>name that includes with\'r\': </strong>' + names.filter(name =>name.includes('r'))


console.log(aramide.textContent)