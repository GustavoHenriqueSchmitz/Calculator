
//Resultados
const operacao = document.querySelector("#container_resultado p")
const resultado = docume.querySelector("#container_operacao p")

//Ouvindo os Operadores
sinal_pot.addEventListener('click', operador('**'))
sinal_div.addEventListener('click', operador('/'))
sinal_mul.addEventListener('click', operador('*'))
sinal_sub.addEventListener('click', operador('-'))
sinal_sum.addEventListener('click', operador('+'))
igual.addEventListener('click', operador('='))

//Ouvindo os Números
n0.addEventListener('click', numero('0'))
n1.addEventListener('click', numero('1'))
n2.addEventListener('click', numero('2'))
n3.addEventListener('click', numero('3'))
n4.addEventListener('click', numero('4'))
n5.addEventListener('click', numero('5'))
n6.addEventListener('click', numero('6'))
n7.addEventListener('click', numero('7'))
n8.addEventListener('click', numero('8'))
n9.addEventListener('click', numero('9'))

conta = null

function operador(operador) {

}

function numero(num) {

}
