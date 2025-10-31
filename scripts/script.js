console.log("Chicken :)")

function EnviarMensagem() {
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem') ? document.getElementById('mensagem').value.trim() : '';
    const nome = document.getElementById('nome') ? document.getElementById('nome').value.trim() : '';
    const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';

    if (!assunto || !mensagem || !nome || !email) {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
    } else {
        alert('Sua solicitação sobre ' + assunto + ' foi enviada com sucesso!');
    }
}
