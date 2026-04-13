document.getElementById("formDoacao").addEventListener("submit", function(e) { // pega o formulário pelo id
    e.preventDefault(); // impede o comportamento padrão do formulário, que seria recarregar a página ao enviar
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let sangue = document.getElementById("sangue").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
})