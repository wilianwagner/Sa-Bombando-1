const calc = document.querySelector("#calc")
var resp = document.querySelector("#div")

//Retira os elemntos selecionados no radio do html
//definindo os valores de cada arrray de acordo com a tabela pre existente de resistores no radio
var faixa1 = document.getElementsByName("options-outlined"); // Primeira faixa
var faixa2 = document.getElementsByName("options-outlined2"); // Primeira faixa
var faixa3 = document.getElementsByName("options-outlined3"); // Primeira faixa
var faixa4 = document.getElementsByName("options-outlined4"); // Primeira faixa
var faixa5 = document.getElementsByName("options-outlined5"); // Primeira faixa
/*
const cores1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
const cores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
const cores3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
const cores4 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 0, 0, 0.1, 0.01]
*/

calc.addEventListener("click", (e) => {

    //Confere se o radio foi selecionado, confere qual elemento foi selecionado e atribuie a variavel para primeira faixa
    for (let i = 0; i < faixa1.length; i++) {//conta a quantidade de itens no array
        if (faixa1[i].checked) { //checha se tem algum checado

            var valFaixa1 = String(faixa1[i].value) //le o array
            console.log((valFaixa1))
        }
    }


    //Confere se o radio foi selecionado, confere qual elemento foi selecionado e atribuie a variavel para segunda faixa
    for (let i = 0; i < faixa2.length; i++) {//conta a quantidade de itens no array
        if (faixa2[i].checked) {//checha se tem algum checado

            var valFaixa2 = String(faixa2[i].value) //le o array
            console.log((valFaixa2))
        }
    }

    //Confere se o radio foi selecionado, confere qual elemento foi selecionado e atribuie a variavel para terceira faixa
    for (let i = 0; i < faixa3.length; i++) {//conta a quantidade de itens no array
        if (faixa3[i].checked) {//checha se tem algum checado

            var valFaixa3 = String(faixa3[i].value) //le o array
            console.log((valFaixa3))

        }
    }


    //Confere se o radio foi selecionado, confere qual elemento foi selecionado e atribuie a variavel para quarta faixa
    for (let i = 0; i < faixa4.length; i++) {//conta a quantidade de itens no array
        if (faixa4[i].checked) {//checha se tem algum checado
            var valFaixa4 = Number(faixa4[i].value)
            console.log((valFaixa4))
        }
    }
    //Confere se o radio foi selecionado, confere qual elemento foi selecionado e atribuie a variavel para quinta faixa
    for (let i = 0; i < faixa5.length; i++) { //conta a quantidade de itens no array
        if (faixa5[i].checked) { //checha se tem algum checado
            //  var position = radios.indexOf() RRRROOOOOOOOOOER
            var valFaixa5 = String(faixa5[i].value) //le o array
            console.log((valFaixa5))
        }
    }

    let concatenado = Number(valFaixa1 + valFaixa2 + valFaixa3)
    console.log(concatenado) //teste de concatenação entre as três faixas

    let total = concatenado * valFaixa4
//A saída abaixo identifica se o valor for maior de 1000 para identar a saída de forma correta    
    if (total > 1000) {
        total = total / 1000
        resp.innerText = `A resistência é de ${total}KΩ e sua tolerância é de ±${valFaixa5}%`

    } else {
        resp.innerText = `A resistência é de ${total}Ω e sua tolerância é de ±${valFaixa5}%`
    }
})
