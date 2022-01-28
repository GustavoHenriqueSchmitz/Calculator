const sinal_pot = document.querySelector('#pot')
const sinal_div = document.querySelector('#div')
const sinal_mul = document.querySelector('#mul')
const sinal_sub = document.querySelector('#sub')
const sinal_sum = document.querySelector('#sum')
const sinal_igu = document.querySelector('#igu')
const n0 = document.querySelector('#n0')
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const n3 = document.querySelector('#n3')
const n4 = document.querySelector('#n4')
const n5 = document.querySelector('#n5')
const n6 = document.querySelector('#n6')
const n7 = document.querySelector('#n7')
const n8 = document.querySelector('#n8')
const n9 = document.querySelector('#n9')
console.log(sinal_pot)


//Resultados
const operacao = document.querySelector("#container_operacao p")
const resultado = document.querySelector("#container_resultado p")

//Ouvindo os Operadores
sinal_pot.addEventListener('click', monta_conta('**'))
sinal_div.addEventListener('click', monta_conta('/'))
sinal_mul.addEventListener('click', monta_conta('*'))
sinal_sub.addEventListener('click', monta_conta('-'))
sinal_sum.addEventListener('click', monta_conta('+'))
sinal_igu.addEventListener('click', monta_conta('='))

//Ouvindo os Números
n0.addEventListener('click', monta_conta(0))
n1.addEventListener('click', monta_conta(1))
n2.addEventListener('click', monta_conta(2))
n3.addEventListener('click', monta_conta(3))
n4.addEventListener('click', monta_conta(4))
n5.addEventListener('click', monta_conta(5))
n6.addEventListener('click', monta_conta(6))
n7.addEventListener('click', monta_conta(7))
n8.addEventListener('click', monta_conta(8))
n9.addEventListener('click', monta_conta(9))

let = esc_operacao = ''
let = result_operacao = ''
let = num = ''
let = listanums = []

function monta_conta(operador) {

}

function render() {

}
