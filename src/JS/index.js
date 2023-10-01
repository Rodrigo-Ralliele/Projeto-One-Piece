

const botoes = document.querySelectorAll('.botao')
console.log(botoes);

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        DesselecionarPersonagem();
        botao.classList.add("selecionado");
         personagens[indice].classList.add("selecionado")
    });
})





function DesselecionarPersonagem() {
    const personagemselecionado = document.querySelector('.personagem.selecionado');
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const BotaoSelecionado = document.querySelector(".botao.selecionado");
    BotaoSelecionado.classList.remove("selecionado");
}

