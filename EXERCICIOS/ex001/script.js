
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fundomanha.png'
        document.body.style.background = '#DBDB70'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'fundotarde.png'
        document.body.style.background = '#FF9900'
    } else {
        //Boa Noite
        img.src = 'fundonoite.png'
        document.body.style.background = '#2F4F4F'
    }
}
    