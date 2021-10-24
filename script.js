function Enviar() {

    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var celular = document.getElementById("celular");

    if (nome.value != "" && cpf.value != "" && celular.value != "" && endereco.value != "" && numero.value != "") {
        alert('Obrigado ' + nome.value + ' os seus dados foram recebidos com sucesso');
    }



   

}
