document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    adicionarContato(nome, telefone);
    limparCampos();
});

function adicionarContato(nome, telefone) {
    const corpoTabela = document.getElementById("corpo-tabela");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    corpoTabela.appendChild(novaLinha);
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}