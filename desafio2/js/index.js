// Validação do formulário de cadastro de usuário
const formCadastro = document.getElementById("form-cadastro");

function mostrarErro(idCampo, mensagem) {
    const erroElemento = document.getElementById("erro-" + idCampo);
    if (erroElemento) {
        erroElemento.textContent = mensagem;
    }
}

function limparErros() {
    const spansErro = document.querySelectorAll(".erro");
    spansErro.forEach(span => {
        span.textContent = "";
    });
}

formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Evento submit de cadastro disparado");

    limparErros();
    let temErro = false;

    const userId = document.getElementById("userId").value.trim();
    const senha = document.getElementById("senhaCadastro").value.trim();
    const confirmaSenha = document.getElementById("confirmaSenha").value.trim();
    const termosAceitos = document.getElementById("concordo_termos").checked;

    if (userId === "") {
        mostrarErro("userId", "Por favor, crie um ID de usuário.");
        temErro = true;
    }

    if (senha === "") {
        mostrarErro("senhaCadastro", "Por favor, crie uma senha.");
        temErro = true;
    }

    if (confirmaSenha === "") {
        mostrarErro("confirmaSenha", "Por favor, confirme sua senha.");
        temErro = true;
    } else if (senha !== confirmaSenha) {
        mostrarErro("confirmaSenha", "As senhas não coincidem.");
        temErro = true;
    }

    if (!termosAceitos) {
        mostrarErro("concordo_termos", "Você precisa aceitar os Termos e a Política de Privacidade.");
        temErro = true;
    }

    if (!temErro) {   
        // Salva no LocalStorage como JSON
        localStorage.setItem("usuarioCadastrado", userId);
        localStorage.setItem("senhaCadastrada", senha);

        alert("O seu cadastro foi realizado com sucesso!\n\nRedirecionaremos você para a página de inscrição...");

        // Redireciona para a página de inscrição
        window.location.href = "inscricao.html";
    }
});
