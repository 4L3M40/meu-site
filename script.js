const form = document.getElementById("formContato");
const msgSucesso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function (e) {
    let valido = true;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagemContato");

    [nome, email, mensagem].forEach(el => el.classList.remove("erro"));

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
        e.preventDefault();
        alert("Por favor, preencha todos os campos corretamente.");
    } else {
        // Mostra mensagem de sucesso após envio
        form.style.display = "none"; // Esconde o formulário
        msgSucesso.style.display = "block"; // Mostra mensagem
    }
});
