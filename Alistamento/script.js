function cadastrar(){
    var idade = document.getElementById('idade').value
    var numeroIdade = parseInt(idade)
    var seuNome = document.getElementById('nome').value
    var resultado = document.getElementById('res')
    if(numeroIdade < 17){
        resultado.innerHTML = 'Você ainda não tem idade para se alistar'
    } else if(numeroIdade == 17){
        resultado.innerHTML = `Cadastro efetuado com sucesso, ${seuNome}!`
    } else{
        resultado.innerHTML = `Você tem ${numeroIdade} anos e passou da idade de se alistar!`
    }
}