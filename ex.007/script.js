var valor1 = Number(prompt("Digite o 1 valor:"))
var valor2 = Number(prompt("Digite o 2 valor:"))
var valor3 = Number(prompt("Digite o 3 valor:"))

var media = (valor1 + valor2 + valor3) / 3
var mediaFormatada = media.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

alert(`A media dos valores é: ` + mediaFormatada)