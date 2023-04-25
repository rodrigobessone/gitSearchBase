
// Chamando as funções: 
renderUser()
getRepos()
toIndex()

// A função chamada "renderUser" busca informações do usuário armazenadas na memória do navegador 
// em formato JSON. As informações são exibidas na página através da atualização da imagem de perfil e do nome do 
// usuário. Para isso, a função usa o método "querySelector" para selecionar elementos HTML específicos com 
// as classes "image__user" e "div__h1". Finalmente, a função define o conteúdo destes elementos para o valor correspondente do objeto 
// "userData".
function renderUser() {
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    console.log(userData)
    const img = document.querySelector(".image__user")
    img.src = userData.avatar_url
    const h1 = document.querySelector(".div__h1")
    h1.textContent = userData.name
}

// Função chamada "getRepos" que busca os repositórios do usuário no GitHub usando 
// informações do usuário armazenadas na memória do navegador. A função usa o método "JSON.parse" 
// para obter os dados do usuário armazenados na memória do navegador, em seguida, usa o "fetch" 
// para fazer uma solicitação à API do GitHub para obter informações de repositórios do usuário.
// A resposta é convertida em um objeto JSON usando o método "json", e a função "renderRepos" é 
// chamada para renderizar os dados na página. Resumindo, esta função busca e exibe informações 
// de repositórios do usuário a partir das informações do usuário armazenadas na memória do 
// navegador.
async function getRepos() {
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const response = await fetch(`https://api.github.com/users/${userData.login}/repos`)
    const jsonResponse = await response.json()
    renderRepos(jsonResponse)

}

// Função chamada "renderRepos" que renderiza informações de repositórios do GitHub na página. A função 
// recebe um argumento "items", que é um array contendo as informações de repositórios do GitHub. Em 
// seguida, ela itera sobre cada item no array e cria elementos HTML para exibir as informações. A função
// cria uma lista não ordenada (ul) na página e adiciona cada repositório  como um item de lista (li) com
// um título (h2) que exibe o nome do repositório, uma descrição (p) que exibe uma breve descrição do 
// repositório e um botão que redireciona o usuário para a página do repositório no GitHub. Resumindo, 
// esta função é usada para renderizar informações de repositórios do GitHub na página usando elementos 
// HTML criados dinamicamente.
function renderRepos(items) {

    items.forEach(item => {

        const ul = document.querySelector('ul');

        const li = document.createElement('li');
        li.classList.add('section__item');

        const title = document.createElement('h2');
        title.classList.add("section__h2", "text-3")
        title.textContent = item.name;

        const description = document.createElement('p');
        description.classList.add("section__p", "text-5")
        description.textContent = item.description;

        const button = document.createElement("button")
        button.classList.add("button__repository", "text-5")
        button.textContent = "Repositório"
        button.addEventListener("click", () => {
            window.open(item.html_url, "_blank")
        })

        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(button)

        ul.appendChild(li);
    });
}

// A função "toIndex" adiciona um evento de clique ao botão de volta do navegador na página, permitindo
// que o usuário retorne para a página anterior ao clicar nele.
function toIndex() {
    const input = document.querySelector(".input")
    const button = document.querySelector(".header__button")
    button.addEventListener("click", () => {
        window.history.back()
        input.value = ""
    })
}

