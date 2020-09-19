let income = parseInt(prompt("Qual o valor de entrada?"))
let costs = parseInt(prompt("Qual o valor de saída?"))
let taxPercent = parseInt(prompt("Qual a porcentagem dos impostos?"))

let rendaBruta = income - costs
let tax = rendaBruta*taxPercent/100

let rendaLiq = rendaBruta - tax

console.log(rendaLiq)
document.write("O valor da renda líquida é $"+rendaLiq+".") 
