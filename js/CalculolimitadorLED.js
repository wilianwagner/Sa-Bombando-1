const saida = document.querySelector("h3")
const calcular = document.getElementById("cal")
var tensao = document.getElementById("v")
var corrente = document.getElementById("i")
var led = document.getElementById("l")
calcular.addEventListener("click", (e) => {
    var v = Number(tensao.value)
    var i = Number(corrente.value)
    var l = Number(led.value)
    let r = (v - l) / i

    if (r > 1000) {
        r = r / 1000
        saida.innerText = `A resistência é de ${r.toFixed(0)}KΩ`

    } else {
        saida.innerText = `A resistência é de ${r.toFixed(0)}Ω`
    }

})