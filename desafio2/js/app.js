console.log("Js funcionando");
// Captura o botão de salvar
const botaoSalvar = document.getElementById("btn_salvar");

// Adiciona um evento de clique no botão
botaoSalvar.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value.trim();

    if (!validarEmail(email)) {
        alert("Atenção: o endereço de email digitado NÃO é válido.");
        return;
    }
});

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
    
    e.preventDefault(); // Impede o envio automático do formulário

    console.log("Evento submit disparado");

    const nome = document.getElementById("nome").value.trim();
    const dataNasc = document.getElementById("data_nasc").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const sexo = document.getElementById("sexo").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const docIdentidade = document.getElementById("doc_identidade").files.length;
    const cep = document.getElementById("cep").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numeroCasa = document.getElementById("numero_casa").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const compResidencia = document.getElementById("comp_residencia").files.length;
    const trilhaSelecionada = document.querySelector("input[name='trilha']:checked");
    const userId = document.getElementById("userId").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const termosAceitos = document.querySelector("input[name='concordancia_termos_politica']:checked");

    limparErros();
    let temErro = false;

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
        mostrarErro("email", "Por favor, informe o seu endereço de e-mail corretamente.");
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

    // if (trilhaSelecionada === false) {
    //     mostrarErro("trilha", "Por favor, informe o nome do seu estado.");
    //     temErro = true;
    // }

    if (userId === "") {
        mostrarErro("userId", "Preencha o seu nome de usuário.");
        temErro = true;
    }

    if (senha === "") {
        mostrarErro("senha", "Informe a sua senha para efetuar o login.");
        temErro = true;
    }
    

    if (nome === "" || dataNasc === "" || cpf === "" || sexo === "" || email === "" || telefone === "" || docIdentidade === 0 || cep === "" || rua === "" || numeroCasa === "" || cidade === "" || estado === "" || compResidencia === 0 || !trilhaSelecionada || userId === "" || senha === "" || !termosAceitos) {
        alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
        return;
    }

    
    
    // Se tudo estiver certo:
    alert("Inscrição realizada com sucesso!");
});

