function adicionar(){
    let numero = window.document.getElementById('txtnumero')
    let res = window.document.getElementById('sellista')
    let num = Number(numero.value)

    let lista = []
    lista.push(num)

    //Adicionando o Elemento no select
    let item = document.createElement('option')
    item.text = `O valor ${num} foi adicionado.`
    item.value = `lis${lista.indexOf(num)}`
    res.appendChild(item)
}

function finalizar(){
    
}