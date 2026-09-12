import { useState } from "react";
import { Link } from "react-router-dom";
import { catalogo } from "../data/produtos";

function Produtos({ adicionarAoCarrinho }) {
  const [mensagem, setMensagem] = useState("");

  function adicionarProduto(produto) {
    adicionarAoCarrinho(produto);
    setMensagem(`${produto.nome} foi adicionado ao carrinho.`);
  }

  return (
    <main>
      <header>
        <h1>Produtos MimosPet</h1>
        <p>Escolha os mimos para o seu pet.</p>

        <Link to="/">Ver carrinho</Link>
      </header>

      <p className="mensagem-feedback" aria-live="polite">
        {mensagem}
      </p>

      <section aria-labelledby="titulo-produtos">
        <h2 id="titulo-produtos">Produtos disponíveis</h2>

        {catalogo.map((produto) => (
          <article key={produto.id}>
            <span className="icone-produto" aria-hidden="true">
              {produto.icone}
            </span>

            <h2>{produto.nome}</h2>

            <p>
              {produto.precoUnitario.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <button
              type="button"
              onClick={() => adicionarProduto(produto)}
            >
              Adicionar ao carrinho
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Produtos;