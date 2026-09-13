import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Produtos from "./pages/Produtos";
import Pagamento from "./pages/Pagamento";
import Sucesso from "./pages/Sucesso";
import Falha from "./pages/Falha";
import { produtosIniciais } from "./data/produtos";

function App() {
  const [carrinho, setCarrinho] = useState(produtosIniciais);

  function adicionarAoCarrinho(produtoSelecionado, quantidadeEscolhida = 1) {
    setCarrinho((carrinhoAtual) => {
      const produtoExistente = carrinhoAtual.find(
        (produto) => produto.id === produtoSelecionado.id
      );

      if (produtoExistente) {
        return carrinhoAtual.map((produto) =>
          produto.id === produtoSelecionado.id
            ? {
              ...produto,
              quantidade: produto.quantidade + quantidadeEscolhida,
            }
            : produto
        );
      }

      return [
        ...carrinhoAtual,
        {
          ...produtoSelecionado,
          quantidade: quantidadeEscolhida,
        },
      ];
    });
  }

  const totalItens = carrinho.reduce(
    (total, produto) => total + produto.quantidade,
    0
  );

  return (
    <Routes>
      <Route
        path="/"
        element={<Carrinho produtos={carrinho} />}
      />

      <Route
        path="/produtos"
        element={
          <Produtos
            adicionarAoCarrinho={adicionarAoCarrinho}
            totalItens={totalItens}
          />
        }
      />

      <Route
        path="/pagamento"
        element={<Pagamento produtos={carrinho} />}
      />

      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/falha" element={<Falha />} />
    </Routes>
  );
}

export default App;