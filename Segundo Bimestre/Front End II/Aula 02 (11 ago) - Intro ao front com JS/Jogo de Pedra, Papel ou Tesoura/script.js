
// Desafio - com professor
// Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

//REGRAS DO JOGO
// Pedra ganha de Tesoura.
// Tesoura ganha de Papel.
// Papel ganha de Pedra.

let maoUsuario = parseInt(prompt("Pedra(1), papel(2) ou tesoura(3)?"))
    //confirm valor boleano = ok e cancelar
    //alert aviso com um botão de ok
    //prompt caixa de diálogo
let maoMaquina = parseInt(Math.random() * 2 + 1)

if (maoUsuario == 1) {
    if (maoMaquina == 1) {
        console.log("empate")
    } else if (maoMaquina == 2) {
        console.log("perdeu")
    } else if (maoMaquina == 3) {
        console.log("venceu")
    }
}

if (maoUsuario == 2) {
    if (maoMaquina == 1) {
        console.log("venceu")
    } else if (maoMaquina == 2) {
        console.log("empate")
    } else if (maoMaquina == 3) {
        console.log("perdeu")
    }
}

if (maoUsuario == 3) {
    if (maoMaquina == 1) {
        console.log("perdeu")
    } else if (maoMaquina == 2) {
        console.log("venceu")
    } else if (maoMaquina == 3) {
        console.log("empate")
    }
}