function adicionar(){
    
    let lista = []
    let numero = window.document.getElementById('txtnumero')
    let num = Number(numero.value)

    if(num > 100 || num < 1){
        window.alert('Por favor, digite um número entre 01 e 100!')
    }else{
        if(lista.indexOf(num) == -1){

            let res = window.document.getElementById('sellista')

            lista.push(num)

            //Adicionando o Elemento no select
            let item = document.createElement('option')
            item.text = `O valor ${num} foi adicionado.`
            item.value = `lis${lista.indexOf(num)}`
            res.appendChild(item)

        }else{
            window.alert('O número digitado já foi adicionado!')
            
        }
    
    }
    
}

function finalizar(){

}