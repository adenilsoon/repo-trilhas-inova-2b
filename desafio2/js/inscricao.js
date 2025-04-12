console.log("Js funcionando");

// Função de validação do e-mail
function validarEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
}

function mostrarErro(idCampo, mensagem) {
    const erroElemento = document.getElementById("erro-" + idCampo);
    if (erroElemento) {
        erroElemento.textContent = mensagem;
    }
}

function limparErros() {
    const erros = document.querySelectorAll(".erro");
    erros.forEach(el => el.textContent = "");
}

// Validar todos os campos
const formulario = document.getElementById("form-inscricao");

formulario.addEventListener("submit", function(e) {
    
    e.preventDefault(); //impede o envio automático do formulário

    console.log("Evento submit disparado");

    const nome = document.getElementById("nome").value.trim();
    const dataNasc = document.getElementById("data_nasc").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const sexo = document.getElementById("sexo").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const docIdentidade = document.getElementById("doc_identidade");
    const cep = document.getElementById("cep").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numeroCasa = document.getElementById("numero_casa").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const compResidencia = document.getElementById("comp_residencia");
    const trilhaSelecionada = document.querySelector("input[name='trilha']:checked");
    const userId = document.getElementById("userId").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const termosAceitos = document.querySelector("input[id='concordo_termos']:checked");

    limparErros();
    let temErro = false;

    if (nome === "" || dataNasc === "" || cpf === "" || sexo === "" || email === "" || telefone === "" || docIdentidade === 0 || cep === "" || rua === "" || numeroCasa === "" || cidade === "" || estado === "" || compResidencia === 0 || !trilhaSelecionada || userId === "" || senha === "" || !termosAceitos) {
        alert("Atenção: verifique o correto preenchimento de todos os campos obrigatórios.\n\nSe atente também a concordância com nossos Termos e Condições e com a nossa Política de Privacidade.");
        temErro = true;
    }

    if (nome === "") {
        mostrarErro("nome", "Por favor, preencha o seu nome.");
        temErro = true;
    }

    if (dataNasc === "") {
        mostrarErro("data_nasc", "Por favor, informe a sua data de nascimento.");
        temErro = true;
    }

    if (cpf === "") {
        mostrarErro("cpf", "Por favor, preencha o seu CPF.");
        temErro = true;
    }

    if (sexo === "") {
        mostrarErro("sexo", "Por favor, informe o seu sexo.");
        temErro = true;
    }

    if (email === "") {
        mostrarErro("email", "Por favor, informe o seu endereço de email.");
        temErro = true;
    }else if (!validarEmail(email)) {
        mostrarErro("email", "O endereço de email digitado não é válido.");
        temErro = true;
    }

    if (telefone === "") {
        mostrarErro("telefone", "Por favor, preencha com o seu número de telefone.");
        temErro = true;
    }

    if (cep === "") {
        mostrarErro("cep", "Por favor, informe o CEP da sua residência.");
        temErro = true;
    }

    if (rua === "") {
        mostrarErro("rua", "Por favor, informe o nome da sua rua.");
        temErro = true;
    }

    if (numeroCasa === "") {
        mostrarErro("numero_casa", "Por favor, preencha o n° da sua residência.");
        temErro = true;
    }

    if (cidade === "") {
        mostrarErro("cidade", "Por favor, informe o nome da sua cidade.");
        temErro = true;
    }

    if (estado === "") {
        mostrarErro("estado", "Por favor, informe o nome do seu estado.");
        temErro = true;
    }

    if (compResidencia.files.length === 0) {
        mostrarErro("comp_residencia", "Por favor, insira um comprovante de residência (conta de água, luz, telefone...).");
        temErro = true;
    }

    if (doc_identidade.files.length === 0) {
        mostrarErro("doc_identidade", "Por favor, insira um documento de identidade (registro geral, CNH ou carteira de trabalho).");
        temErro = true;
    }

    if (trilhaSelecionada === null) {
        mostrarErro("trilha", "Você precisa selecionar em qual trilha de aprendizado deseja se inscrever.");
        temErro = true;
    }

    if (termosAceitos === null) {
        mostrarErro("concordo_termos", "Você precisa concordar com os nossos Termos e Serviços e com a nossa Política de Privacidade.");
        temErro = true;
    }

    if (userId === "") {
        mostrarErro("userId", "Informe o seu nome de usuário.");
        temErro = true;
    }

    if (senha === "") {
        mostrarErro("senha", "Informe a sua senha para efetuar o login.");
        temErro = true;
    }

    // Verificar login e senha para finalizar inscrição
    const usuarioSalvo = localStorage.getItem("usuarioCadastrado");
    const senhaSalva = localStorage.getItem("senhaCadastrada");

    if (userId !== usuarioSalvo || senha !== senhaSalva) {
        alert("Usuário ou senha incorretos! Verifique e tente novamente.");
        mostrarErro("userId", "Usuário inválido.");
        mostrarErro("senha", "Senha inválida.");
        return; // interrompe o envio
    }

    if (!temErro) {
        alert("Inscrição realizada com sucesso!\n\nRedirecionaremos você para a página inicial...");
        window.location.href = "../index.html";
    }

});

document.getElementById('btn_salvar').addEventListener('click', () => {
  
    const nome = document.getElementById("nome").value.trim();
    const dataNasc = document.getElementById("data_nasc").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const sexo = document.getElementById("sexo").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numeroCasa = document.getElementById("numero_casa").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    const inscricao = {
      nome,
      dataNasc,
      cpf,
      sexo,
      email,
      telefone,
      docIdentidade,
      cep,
      rua,
      numeroCasa,
      cidade,
      estado,
      compResidencia,
      trilhaSelecionada
    };
  
    // Salvando no localStorage como string
    localStorage.setItem('inscricaoTemp', JSON.stringify(inscricao));

  });


  // Carregar as informações salvas com o localStorage ao carregar a página
  window.addEventListener('load', () => {
    const inscricaoSalva = localStorage.getItem('inscricaoTemp');
  
    if (inscricaoSalva) {
      const inscricao = JSON.parse(inscricaoSalva);

      document.getElementById("nome").value = inscricao.nome || '';
      document.getElementById("data_nasc").value = inscricao.dataNasc || '';
      document.getElementById("cpf").value = inscricao.cpf || '';
      document.getElementById("sexo").value = inscricao.sexo || '';
      document.getElementById("email").value = inscricao.email || '';
      document.getElementById("telefone").value = inscricao.telefone || '';
      document.getElementById("cep").value = inscricao.cep || '';
      document.getElementById("rua").value = inscricao.rua || '';
      document.getElementById("numero_casa").value = inscricao.numeroCasa || '';
      document.getElementById("cidade").value = inscricao.cidade || '';
      document.getElementById("estado").value = inscricao.estado || '';
    }
});

document.getElementById("btn_cancelar").addEventListener("click", () => {
    window.location.href = "index.html";
});
