//Cria referência aos botões e ao h3 aonde vai sair as respostas.
const paralelo = document.getElementById("paralelo")
const emserie = document.getElementById("em serie")
const proximo = document.getElementById("prox")
const voltar = document.getElementById("voltar")
const zerar = document.getElementById("zerar")
const saida = document.querySelector("h3")
//Referencia aos campos de texto
var resistor = document.getElementById("r")
var numeror = document.getElementById("numr")
var numre = []
//Botão para adicionar mais resistores a lista(array).
proximo.addEventListener("click", (e) => {
  var r = Number(resistor.value)
  numre.push(r)
  saida.innerText = `Os resistores selecionados em Ω são: ${numre}`
})
//Botão de calculo em serie, pega os valores do array e soma eles.
emserie.addEventListener("click", (e) => {
  let sum = 0
  for (let i = 0; i < numre.length; i++) {
    sum += numre[i];
  };
  saida.innerText = `A associação dos resistores em série é de: ${sum}Ω.`
})
//Botão de calculo em paralelo, pega os valores do array e faz o calculo de 1/req = 1/r1 + 1/r2 + 1/r3...
paralelo.addEventListener("click", (e) => {
  numre.forEach(myFunction)
  function myFunction(item, index, arr) {
    arr[index] = 1 / item;
  }
  let sum = 0
  for (let i = 0; i < numre.length; i++) {
    sum += numre[i];
  };
  let total = 1 / sum
  saida.innerText = `A associação dos resistores em paralelo é ${total}Ω.`
})
//Botão para zerar a lista de resistores.
zerar.addEventListener("click", (e) => {
  numre = []
  saida.innerText = `Você zerou a lista, comece novamente.`
})
//Botão para retirar o ultimo resistor adicionado.
voltar.addEventListener("click", (e) => {
  numre.pop()
  saida.innerText = `Os resistores selecionados são: ${numre}`
})
