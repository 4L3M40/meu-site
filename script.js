const btnMensagem = document.getElementById("btnMensagem");
const btnTema = document.getElementById("btnTema");

btnMensagem.addEventListener("click", () => {
    document.getElementById("mensagem").innerText = "Você clicou no botão! 😎";
});

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnTema.innerText = "Desativar modo escuro";
    } else {
        btnTema.innerText = "Ativar modo escuro";
    }
});
