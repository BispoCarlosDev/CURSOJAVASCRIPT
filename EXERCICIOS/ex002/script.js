function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    //var fano = Number.parseInt(tano)
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro! Verifique os Dados e Tente novamente!')
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade < 9){
                //Criança
                img.setAttribute('src', 'meninocrianca.png')
            } else if(idade < 15){
                //Adolescente
                img.setAttribute('src', 'garoto.png')
            } else if(idade < 23){
                //Jovem
                img.setAttribute('src', 'meninojovem.png')
            } else if(idade < 29){
                //Jovem Adulto
                img.setAttribute('src', 'homemjovem.png')
            } else if(idade < 55){
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 9){
                //Criança
                img.setAttribute('src', 'meninacrianca.png')
            } else if(idade < 15){
                //Adolescente
                img.setAttribute('src', 'garota.png')
            } else if(idade < 23){
                //Jovem
                img.setAttribute('src', 'meninajovem.png')
            } else if(idade < 29){
                //Jovem Adulto
                img.setAttribute('src', 'mulherjovem.png')
            } else if(idade < 55){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}