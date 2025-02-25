document.getElementById("frmLogin").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("iptMail").value;
    const password = document.getElementById("iptPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || []; // Pega os usuários cadastrados
    const user = users.find(user => user.email === email); // Procura um usuário com o mesmo email

    if (!user) {
        alert("Usuário não encontrado!");
        return;
    }

    if (user.password !== password) {
        alert("Senha incorreta!");
        return;
    }

    alert("Login realizado com sucesso!");
    window.location.href = "hitman.html"; 
});
