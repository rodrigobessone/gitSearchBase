// A função "newSearch" adiciona um evento de clique ao botão na página de erro, permitindo que o 
// usuário retorne para a página anterior ao clicar nele. Ao clicar no botão, a função usa o método 
// "window.history.back()" para redirecionar o usuário para a página anterior no histórico de 
// navegação.
function newSearch() {
    const button = document.querySelector(".button__error")
    button.addEventListener("click", () => {
        window.history.back()
    })
}

newSearch()