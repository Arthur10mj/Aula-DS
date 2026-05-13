
const botao = document.querySelector('#box-button');
const inputNome = document.getElementById("box-name");
const inputEmail = document.getElementById("box-email");
const inputSenha = document.getElementById("box-senha");

function validarFormulario() {
    const nomeValido = inputNome.value.trim() !== "";
    const emailValido = inputEmail.value.trim() !== "";
    const senhaValida = inputSenha.value.trim() !== "";

    if (nomeValido && emailValido && senhaValida) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputNome.addEventListener('input', validarFormulario);
inputEmail.addEventListener('input', validarFormulario);
inputSenha.addEventListener('input', validarFormulario);

validarFormulario();

botao.addEventListener('click', function() {
    console.log("O botão 'box-button' foi clicado!");
    alert("Ação executada com sucesso!");
});
