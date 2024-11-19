// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postContainer = document.querySelector(".post-container");

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obter os valores dos campos do formulário
        const postTitle = document.getElementById("postTitle").value;
        const postContent = document.getElementById("postContent").value;
        const postVisible = document.getElementById("postVisible").checked;
        const postImage = document.getElementById("postImage").files[0];

        // Verificar se o título e o conteúdo foram preenchidos
        if (postTitle && postContent) {
            // Criar o elemento do novo post
            const newPost = document.createElement("div");
            newPost.classList.add("post");

            const titleElement = document.createElement("h3");
            titleElement.classList.add("post-title");
            titleElement.textContent = postTitle;
            newPost.appendChild(titleElement);

            const contentElement = document.createElement("p");
            contentElement.classList.add("post-content");
            contentElement.textContent = postContent;
            newPost.appendChild(contentElement);

            // Verificar se há uma imagem
            if (postImage) {
                const imageElement = document.createElement("img");
                imageElement.classList.add("post-image");
                imageElement.src = URL.createObjectURL(postImage);
                imageElement.alt = "Imagem do Post";
                imageElement.style.maxWidth = "100%";
                newPost.appendChild(imageElement);
            }

            // Verificar visibilidade do post
            if (!postVisible) {
                newPost.style.display = "none";
            }

            // Adicionar o novo post ao container
            postContainer.appendChild(newPost);

            // Resetar o formulário
            postForm.reset();
        } else {
            alert("Por favor, preencha o título e o conteúdo do post.");
        }
    });
});

