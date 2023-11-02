var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)

if(hora < 6){
    console.log('Boa Madrugadaa!!!')
} else if(hora <12){
    console.log('Bom Diaa!!!')
} else if(hora < 18){
    console.log('Boa Tardee!!!')
} else{
    console.log('Boa Noitee!!!')
}