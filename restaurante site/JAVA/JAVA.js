var num1 = 20.90
var num2 = 19.90
var num3 = 15.20
var num4 = 75.99


function somatudo() {
    let soma = 0
    if(document.getElementById('lasanha').checked){
        soma += num1
    } 
    if(document.getElementById('feijoada').checked){
        soma += num3
    }
    if(document.getElementById('macarrao').checked){
        soma += num2
    }
    if( document.getElementById('hamburgui').checked){
        soma += num4
    }
    alert(soma)
}