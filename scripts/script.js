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

    if(nome === "" || email === "" || idade === "" || peso === "" || sangue === "" || 
        telefone === "" || cidade === "" || estado === "") return alert("Todos os campos são obrigatórios!");

    if(nome.split(" ").length < 2) return alert("Nome deve conter pelo menos nome e sobrenome!");

    if(!email.includes("@")) return alert("Insira um email com formato válido!");

})