const form = document.getElementById('contatos')
const Contato = []
const Telefone = []

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaSoma();
    SomaContato();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (Contato.includes(inputNomeContato.value), Telefone.includes(inputTelefoneContato.value)) {
        alert(`o contato: ${inputNomeContato.value} número do telefone ${inputTelefoneContato.value} já foi adicionado a lista de contatos`)
    } else {
        Contato.push(inputNomeContato.value);
        Telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}