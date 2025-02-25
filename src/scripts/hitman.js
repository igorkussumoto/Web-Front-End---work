document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões de contratar
    const buttons = document.querySelectorAll(".submit-button");

    // Adiciona o evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Contrato enviado para o seu e-mail! Verifique sua caixa de entrada.");
            window.location.href = "../../index.html";
        });
    });
});
