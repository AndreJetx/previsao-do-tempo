export function changeBackground() {
    let condicao = document.getElementById("condicao").textContent;
    let body = document.body;
    let novaImagem;

    switch (condicao) {
        case "sol":
            novaImagem = "url('./src/imagens/download.png')";
            break;

        case "Céu limpo":
            novaImagem = "url('./src/imagens/download.png')";
            break;
        default:
            novaImagem = "url('./src/imagens/tempestade.png')";
    }
    console.log(novaImagem)
    body.style.backgroundImage = novaImagem;
}