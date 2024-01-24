let n = 30

function parimp(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'ímpar'
    }
}

let res = parimp(n)

console.log(`O número selecionado é ${res}`)