import { useState } from "react";
import { Link } from "react-router-dom";
import { catalogo } from "../data/produtos";

function Produtos({ adicionarAoCarrinho, totalItens }) {
  const [mensagem, setMensagem] = useState("");

  const [quantidades, setQuantidades] = useState(() =>
    Object.fromEntries(
      catalogo.map((produto) => [produto.id, 1])
    )
  );

  function alterarQuantidade(id, valor) {
    setQuantidades((quantidadesAtuais) => ({
      ...quantidadesAtuais,
      [id]: Math.max(1, quantidadesAtuais[id] + valor),
    }));
  }

  function adicionarProduto(produto) {
    const quantidadeEscolhida = quantidades[produto.id];

    adicionarAoCarrinho(produto, quantidadeEscolhida);

    setMensagem(
      `${quantidadeEscolhida} unidade(s) de ${produto.nome} adicionada(s).`
    );
  }

  return (
    <main>
      <header className="cabecalho-produtos">
        <div>
          <span className="hero-selo">🐾 Loja MimosPet</span>
          <h1>Escolha os mimos favoritos</h1>
          <p>
            Selecione produtos e quantidades antes de voltar ao carrinho.
          </p>
        </div>

        <Link to="/" className="link-carrinho">
          Ver carrinho
          <span className="contador-carrinho">{totalItens}</span>
        </Link>
      </header>

      <p className="mensagem-feedback" aria-live="polite">
        {mensagem}
      </p>

      <section
        className="grade-produtos"
        aria-labelledby="titulo-produtos"
      >
        <h2 id="titulo-produtos">Produtos disponíveis</h2>

        {catalogo.map((produto) => (
          <article className="card-produto" key={produto.id}>
            <span className="icone-produto" aria-hidden="true">
              {produto.icone}
            </span>

            <h2>{produto.nome}</h2>

            <p className="preco-produto">
              {produto.precoUnitario.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <div
              className="seletor-quantidade"
              aria-label={`Quantidade de ${produto.nome}`}
            >
              <button
                type="button"
                className="botao-quantidade"
                aria-label={`Diminuir quantidade de ${produto.nome}`}
                onClick={() => alterarQuantidade(produto.id, -1)}
              >
                −
              </button>

              <strong>{quantidades[produto.id]}</strong>

              <button
                type="button"
                className="botao-quantidade"
                aria-label={`Aumentar quantidade de ${produto.nome}`}
                onClick={() => alterarQuantidade(produto.id, 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="botao-adicionar"
              translate="no"
              aria-label={`Adicionar ${produto.nome} ao carrinho`}
              onClick={() => adicionarProduto(produto)}
            >
              <span>Adicionar</span>
              <span>ao carrinho</span>
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Produtos;