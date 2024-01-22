function calcular(){
    var numero = window.document.getElementById('txtnumero')
    var res = window.document.getElementById('seltab')

    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(numero.value)
        res.innerHTML = ''

        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${(n*c)}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }

    /*res.innerText = ``
    for(var c = 0; c <= 10; c++){
        res.innerText += Text((`${n} x ${c} = ${(n*c)}`).value)
    }*/
}