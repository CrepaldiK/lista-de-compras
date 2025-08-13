import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista() {
   
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

inputCheckbox.addEventListener("click", function() {
    if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    }
)

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
   
    const acoes = document.createElement("div");
    acoes.classList.add("acoes-item");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.innerHTML = '<img src=./img/edit.svg alt="Editar item" />';
    botaoEditar.addEventListener("click", () => {
        const novoTexto = prompt("Editar item:", nomeItem.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto;
        }
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.innerHTML = '<img src=./img/delete.svg alt="Excluir item" />';
    botaoExcluir.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja excluir este item?")) {
            itemDaLista.remove();
            verificarListaVazia(listaDeCompras);
        }
    });

    acoes.appendChild(botaoEditar);
    acoes.appendChild(botaoExcluir);
    containerItemDaLista.appendChild(acoes);

   return itemDaLista;
}