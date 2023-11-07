function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var tano = window.document.getElementById("txtano")
    var fano = Number.parseInt(tano)
    var res = window.document.getElementById("res")
    if (fano.ariaValueMax.length == 0 || fano.value > ano){
        window.alert('Erro! Verifique os Dados e Tente novamente!')
    }else{
        window.alert('Tudo Ok!')
    }
}