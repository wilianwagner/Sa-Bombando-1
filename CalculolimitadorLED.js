const saida = document.querySelector("h3")
const calcular = document.getElementById("cal")
var tensao = document.getElementById("v")
var corrente = document.getElementById("i")

calcular.addEventListener("click", (e) => {
    var v = Number(tensao.value)
    var i = Number(corrente.value)
    let r = (v - 1.6) / i

    saida.innerText = `O valor do resistor é ${r}Ω.`
    console.log(i)
    console.log(v)
})
