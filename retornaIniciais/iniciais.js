let name = prompt("Insira seu nome e sobrenome.")

let firstInitial = name.slice(0,1)

let secondPosition = name.indexOf(" ")+1

let secondInitial = name.slice(secondPosition,secondPosition+1)

console.log(firstInitial.toUpperCase()+secondInitial.toUpperCase())
document.write("Suas iniciais são "+firstInitial.toUpperCase()+secondInitial.toUpperCase())
