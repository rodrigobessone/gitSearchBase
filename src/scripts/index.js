
// A função "getUsers" busca informações de usuário no GitHub. Ela seleciona elementos HTML específicos, 
// limpa o valor do campo de entrada de texto e adiciona um "event listener" ao botão selecionado. 
// Se a solicitação for bem-sucedida, a função armazena as informações do usuário em "sessionStorage" 
// e redireciona o usuário para uma página de perfil. Se ocorrer um erro, a função redireciona o usuário 
// para uma página de erro. Resumindo, esta  função é usada para buscar e exibir informações de perfil 
// do usuário a partir de um nome de usuário fornecido.
function getUsers() {
    const input = document.querySelector(".input")
    const button = document.querySelector(".button")
    input.value = ""
    button.addEventListener("click", async (event) => {
        event.preventDefault()
        const username = input.value
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error("Usuário não encontrado")
            }
            const jsonResponse = await response.json()
            sessionStorage.setItem("userData", JSON.stringify(jsonResponse))
            window.location.href = "./src/pages/profile.html"
        } catch (error) {
            window.location.href = "./src/pages/error.html"
        }

    })
}

getUsers();