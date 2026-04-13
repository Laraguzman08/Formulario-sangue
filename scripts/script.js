document.getElementById("formDoacao").addEventListener("submit", function(e) { 
// pega o formulário pelo id e executa o código quando o form é enviado
    e.preventDefault(); // impede o comportamento padrão do formulário, que seria recarregar a página ao enviar
    
    // pegando o valor digitado no campo pelo id
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let sangue = document.getElementById("sangue").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    let resultado = document.getElementById("resultado");

    if(nome === "" || email === "" || idade === "" || peso === "" || sangue === "" || 
        telefone === "" || cidade === "" || estado === "") {
            resultado = alert("Todos os campos são obrigatórios!");
            return;
    }
})