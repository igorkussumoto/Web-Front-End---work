document.getElementById("frmRegistry").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("iptName").value;
    const email = document.getElementById("iptEmail").value;
    const cpf = document.getElementById("iptCpf").value;
    const password = document.getElementById("iptPassword").value;
    const passwordRepeat = document.getElementById("iptPasswordRepeat").value;

    if (!isValidCPF(cpf)) {
        alert("CPF inválido!");
        return;
    }

    if (password !== passwordRepeat) {
        alert("As senhas não coincidem!");
        return;
    }

    saveUser(name, email, cpf, password);
    alert("Cadastro realizado com sucesso!");
    this.submit();
    window.location.href = "login.html"; // Redireciona para a página de login
});

function isValidCPF(cpf) {
    cpf = cpf.replace(/[.-]/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    
    let sum = 0, remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf[10]);
}

function saveUser(name, email, cpf, password) {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Pega os usuários salvos ou inicia um array vazio
    users.push({ name, email, cpf, password }); // Adiciona um novo usuário
    localStorage.setItem("users", JSON.stringify(users)); // Salva no localStorage
}
