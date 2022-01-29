
operador_arit = false

function inserir(operador) {
    
    const operacao_container = document.querySelector('#container_operacao p')

    if (typeof(operador) === 'number') {
        operacao_container.innerText += operador
        operador_arit = false
    }

    else if (operador === ' -') {
        alert('Essa função, ainda não funciona no momento.')
    }

    else if (operador_arit === false) {
        operacao_container.innerText += operador
        operador_arit = true
    }

}

function calcular() {
    
    const container_operacao = document.querySelector('#container_operacao p').innerText
    let container_resultado = document.querySelector('#container_resultado p')
    console.log(container_operacao)
    container_resultado.innerText = eval(container_operacao)
    console.log(container_resultado)

}

function apagar() {

    const container_operacao = document.querySelector('#container_operacao p').innerText;
    document.querySelector('#container_operacao p').innerText = container_operacao.substring(0, container_operacao.length -1);

}

function apagar_tudo() {
    
    const container_operacao = document.querySelector('#container_operacao p')
    const container_resultado = document.querySelector('#container_resultado p')
    container_operacao.innerText = ''
    container_resultado.innerText = ''

}
