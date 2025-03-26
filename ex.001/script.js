var numero = Number(prompt("Digite um valor:"))
var numeroFormatado = numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

alert(`o valor é: ${numeroFormatado}`)