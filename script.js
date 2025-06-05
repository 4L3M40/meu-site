document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const abrirFormularioBtn = document.getElementById('abrirFormulario');
  const formularioContato = document.getElementById('formularioContato');
  const voltarTelaAntigaBtn = document.getElementById('voltarTelaAntiga');
  const heroSection = document.querySelector('.hero-section');
  const btnLogin = document.getElementById('btnLogin');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.close-modal');
  
  // Abrir formulário de contato
  abrirFormularioBtn.addEventListener('click', function() {
    heroSection.classList.add('hidden');
    formularioContato.classList.remove('hidden');
  });
  
  // Voltar para a tela inicial
  voltarTelaAntigaBtn.addEventListener('click', function() {
    formularioContato.classList.add('hidden');
    heroSection.classList.remove('hidden');
  });
  
  // Abrir modal de login
  btnLogin.addEventListener('click', function() {
    loginModal.classList.remove('hidden');
  });
  
  // Fechar modal de login
  closeModal.addEventListener('click', function() {
    loginModal.classList.add('hidden');
  });
  
  // Fechar modal ao clicar fora
  window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.classList.add('hidden');
    }
  });
  
  // Envio do formulário de contato
  const formContato = document.getElementById('formContato');
  const mensagemSucesso = document.getElementById('mensagemSucesso');
  
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio (substitua por AJAX se necessário)
      setTimeout(() => {
        formContato.reset();
        formContato.classList.add('hidden');
        mensagemSucesso.classList.remove('hidden');
        
        setTimeout(() => {
          mensagemSucesso.classList.add('hidden');
          heroSection.classList.remove('hidden');
        }, 3000);
      }, 1000);
    });
  }
  
  // Validação do formulário de login
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Adicione aqui a lógica de autenticação
      alert('Login functionality to be implemented');
      loginModal.classList.add('hidden');
    });
  }
});
