    let num = window.document.querySelector('input#txtnumero')
    let lista = window.document.querySelector('select#flista')
    let res = window.document.querySelector('div#res')
    let valores = []

    function isNumero(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        
        //Adicionando o Elemento no select
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else{
        window.alert('Número inválido ou já está na lista!')

    }

    num.value = ''
    num.focus()
    
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[por]
            }
            media = soma / total
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O Maior número informado é ${maior}.</p>`
        res.innerHTML += `<p>O Menor número informado é ${menor}.</p>`
        res.innerHTML += `<P>A Soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A Média dos valores é ${media}.</p>`
    }
}