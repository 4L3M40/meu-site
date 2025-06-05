// Seleciona os elementos do DOM
const btnMensagem = document.getElementById("btnMensagem");
const btnTema = document.getElementById("btnTema");
const mensagem = document.getElementById("mensagem");

// Evento: altera o texto do parágrafo quando o botão é clicado
btnMensagem.addEventListener("click", () => {
    mensagem.textContent = "Você clicou no botão! 😎";
});

// Evento: alterna entre modo claro e escuro
btnTema.addEventListener("click", () => {
    const escuroAtivo = document.body.classList.toggle("modo-escuro");

    // Altera o texto do botão dependendo do modo
    btnTema.textContent = escuroAtivo
        ? "Desativar modo escuro"
        : "Ativar modo escuro";
});
