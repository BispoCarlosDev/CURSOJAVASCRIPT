function contar(){
    var inicial = window.document.getElementById('txtinicio')
    var final = window.document.getElementById('txtfinal')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (inicial.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert('Por favor, preencha todos os campos acima!')
        res.innerHTML = 'Impossível Contar!'
    }
    else {
        res.innerHTML = 'Contando:'
        var i = Number(inicial.value)
        var f = Number(final.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('O Passo 0 e o Passo Negativo não são válidos, considerando Passo = 1!')
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
    
            res.innerHTML += ` \u{1F3C1}`
        } else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
    
            res.innerHTML += ` \u{1F3C1}`
        }

        
    }

    /*for(inicial; inicial <= final; inicial = inicial + passo){
        var res = window.document.getElementById('res')
        res.innerText = `${inicial}`
    }*/
}

