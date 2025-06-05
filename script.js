// Referências aos elementos da interface
const telaAntiga = document.getElementById("telaAntiga");
const formularioContato = document.getElementById("formularioContato");
const abrirFormulario = document.getElementById("abrirFormulario");
const voltarTelaAntiga = document.getElementById("voltarTelaAntiga");
const formContato = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// Abre o formulário e esconde a tela antiga
abrirFormulario.addEventListener("click", () => {
  telaAntiga.style.display = "none";
  formularioContato.style.display = "block";
});

// Volta para a tela antiga
voltarTelaAntiga.addEventListener("click", () => {
  formularioContato.style.display = "none";
  telaAntiga.style.display = "block";
  mensagemSucesso.style.display = "none";
  formContato.reset(); // limpa os campos
});

// Validação básica antes de enviar
formContato.addEventListener("submit", (e) => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagemContato");

  // Remove classes de erro anteriores
  [nome, email, mensagem].forEach((campo) => campo.classList.remove("erro"));

  let valido = true;

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
    e.preventDefault(); // impede o envio se inválido
    alert("Por favor, preencha todos os campos corretamente.");
  } else {
    // Mostrar mensagem após envio (o FormSubmit redireciona, então isso é só extra)
    formContato.addEventListener("formdata", () => {
      mensagemSucesso.style.display = "block";
    });
  }
});
