let doadores = []; //array fora do submit para ir acumulando doadores sem perder dados anteriores
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

    // validações
    if(nome === "" || email === "" || idade === "" || peso === "" || sangue === "" || 
        telefone === "" || cidade === "" || estado === "") return alert("Todos os campos são obrigatórios!");
    if(nome.split(" ").length < 2) return alert("Nome deve conter pelo menos nome e sobrenome!");
    if(!email.includes("@")) return alert("Insira um email com formato válido!");
    if(idade < 16) return alert("Você precisa ter no mínimo 16 anos para doar sangue.");
    if(peso < 50) return alert("O peso mínimo para doar é 50kg.");
    if(isNaN(telefone)) return alert("Telefone deve conter apenas números!");

    // armazenando dados no array
    let doador = {
        nome: nome, 
        email: email, 
        idade: idade, 
        peso: peso,
        sangue: sangue,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };
    doadores.push(doador); // adiciona objeto doador dentro do array doadores
    console.log(doadores);

    // resultado aparece na página
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!❤️";
    document.getElementById("sunghoon").style.display = "block"; // muda o display none pra block, fazendo o gif aparecer na tela
})

document.getElementById("limpar").addEventListener("click", function() {
    document.getElementById("formDoacao").reset();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("sunghoon").style.display = "none";
})

// MÚSICA
    const musica = document.getElementById("som"); // usa const aqui porque o elemento de música é sempre o mesmo
    document.addEventListener('click', function() { // o primeiro clique na página libera o áudio
        musica.play(); // começa a música
    }, {once: true}); // garante que o código só rode no primeiro clique
