// Botões
const btnAbrirForm = document.getElementById("abrirFormulario");
const btnVoltar = document.getElementById("voltarTelaAntiga");
const telaAntiga = document.getElementById("telaAntiga");
const formularioContato = document.getElementById("formularioContato");
const msgSucesso = document.getElementById("mensagemSucesso");
const form = document.getElementById("formContato");

// Mostrar formulário ao clicar no botão
btnAbrirForm.addEventListener("click", () => {
  telaAntiga.style.display = "none";
  formularioContato.style.display = "block";
  msgSucesso.style.display = "none";
  form.style.display = "block";
  form.reset();
});

// Voltar para a tela antiga
btnVoltar.addEventListener("click", () => {
  formularioContato.style.display = "none";
  telaAntiga.style.display = "block";
});

// Validação do formulário
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
    // Após envio, esconde formulário e mostra mensagem de sucesso
    e.preventDefault(); // Evita recarregar a página (pode retirar se quiser enviar mesmo)
    form.style.display = "none";
    msgSucesso.style.display = "block";
  }
});
