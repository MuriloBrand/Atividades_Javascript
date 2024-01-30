let usuarios = [] //nosso banco de dados
let ul = document.getElementById("usuarios_salvos")

function cadastro() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value

    if(nome === '' || email === '') {
        alert("ERRO: Preencha todos os campos")
        return; //Para a função caso um dos inputs esteja vazio
    }

    for(let usuario of usuarios) {
        if(usuario.email === email) {
            alert("Usuario já existe")
            return;
        }
    }

    const usuario = {
        nome, //mesmo que nome: nome
        email
    }

    usuarios.push(usuario)
    alert("Cadastro feito com sucesso!")
}

function mostrarUsuariosSalvos() {
    ul.innerHTML = ""

    for(let usuario of usuarios) {
        ul.innerHTML += `<li>Nome: ${usuario.nome}, E-mail: ${usuario.email}</li>`
    }
}

function descadastro() {
    let emailParaDescadastro = prompt("Digite o email para descadastro")
    let encontrado = false
    let index = 0

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email === emailParaDescadastro) {
            encontrado = true
            index = i
        } 
    }

    if(encontrado) {
        usuarios.splice(index, 1)
        alert("Usuário descadastrado com sucesso!")
    } else {
        alert("Usuário não encontrado")
    }    
}