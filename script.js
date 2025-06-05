// Validação do formulário
const form = document.getElementById("formContato");

form.addEventListener("submit", function (e) {
    let valido = true;

    // Seleciona os campos
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagemContato");

    // Limpa erros anteriores
    [nome, email, mensagem].forEach(el => el.classList.remove("erro"));

    // Verifica campos
    if (nome.value.trim() === "") {
        nome.classList.add("erro");
        valido = false;
    }

    if (!email.value.includes("@") || email.value.trim() === "") {
        email.classList.add("erro");
        valido = false;
    }

    if (mensagem.value.trim().length < 5) {
        mensagem.classList.add("erro");
        valido = false;
    }

    if (!valido) {
        e.preventDefault(); // Impede o envio
        alert("Por favor, preencha todos os campos corretamente.");
    }
});
