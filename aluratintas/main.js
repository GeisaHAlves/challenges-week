const lista = document.querySelector("ul");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  if (lista.getAttribute("data-lista") === "mostrar") {
    lista.setAttribute("data-lista", "esconder");
    botao.textContent = "Aluratintas em estoque: (Mostrar lista)";
  } else {
    lista.setAttribute("data-lista", "mostrar");
    botao.textContent = "Aluratintas em estoque: (Esconder lista)";
  }
});
