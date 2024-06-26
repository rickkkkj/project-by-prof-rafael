function cadastrar() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var username = document.getElementById('username').value;
    var senha = document.getElementById('senha').value;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Dados Cadastrados:</h2>
        <p><strong>NOME COMPLETO:</strong> ${nomeCompleto}</p>
        <p><strong>Nº DE TELEFONE:</strong> ${telefone}</p>
        <p><strong>E-MAIL:</strong> ${email}</p>
        <p><strong>DATA DE NASCIMENTO:</strong> ${dataNascimento}</p>
        <p><strong>NOME DE USUÁRIO:</strong> ${username}</p>
        <p><strong>SENHA:</strong> ${senha}</p>
    `;
    return false;
}