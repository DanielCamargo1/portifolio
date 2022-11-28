function calcular(){
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var texto = document.getElementById('texto')
    var operacao = peso / (altura*altura)  
    if(nome.length == 0 || idade.length == 0 || altura.length == 0 || peso.length == 0 ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if(operacao <= 18.5){
            texto.innerHTML = `${nome} seu IMC é ${operacao} Magreza grau 0 de Obesidade!` 
        } else if ( 18.5 <= operacao & operacao <= 24.9 ){
            texto.innerHTML = `${nome} seu IMC é ${operacao} Normal, grau 0 de Obesidade!`
        } else if(25.0 <= operacao & operacao <=29.9){
            texto.innerHTML = `${nome} seu IMC é ${operacao} Sobrepeso, grau 1 de Obesidade!`
        } else if( 30.0 <= operacao & operacao <= 39.9){
            texto.innerHTML = `${nome} seu IMC é ${operacao} OBESIDADE NÍVEL 2`
        } else{
            texto.innerHTML = `${nome} seu IMC é ${operacao} ,Obesidade grave, grau 3!`
        }
    }   
}

function limpar(){
    texto.innerHTML = ''
    var nome = document.querySelector('#nome')
    nome.value = ''
    var idade = document.querySelector('#idade')
    idade.value = ''
    var altura = document.querySelector('#altura')
    altura.value = ''
    var peso = document.querySelector('#peso')
    peso.value = ''


}