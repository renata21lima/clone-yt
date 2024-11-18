// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Definindo as credenciais de login
    const validUsername = "usuario";
    const validPassword = "senha123";

    // Verificando as credenciais
    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        // Redirecionando para a página principal (pode ser modificada para qualquer URL)
        window.location.href = "index.html";
    } else {
        // Exibindo uma mensagem de erro
        document.getElementById('error-message').textContent = "Nome de usuário ou senha inválidos!";
    }
});
