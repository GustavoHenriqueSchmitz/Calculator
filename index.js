
function inserir(operador) {
    
    const operacao_container = document.querySelector('#container_operacao p')
    
    if (typeof(operador) === 'number')
        operacao_container.innerText += operador
    
    else if (typeof(operador) === 'string')
        operacao_container.innerText += ' ' + operador + ' '
}

function calcular() {

}

function render() {

}
