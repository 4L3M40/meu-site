const btnMensagem = document.getElementById("btnMensagem");
const btnTema = document.getElementById("btnTema");

btnMensagem.addEventListener("click", () => {
    document.getElementById("mensagem").innerText = "Você clicou no botão! 😎";
});

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
        btnTema.innerText = "Desativar modo escuro";
    } else {
        btnTema.innerText = "Ativar modo escuro";
    }
});