// Aqui vou usar: MAP - para percorrer o array; KEY PRODUTO ID - para ser identificado cada produto; PRODUTO = PRODUTO - para enviar o objeto por props


import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import { produtos } from "../data/produtos";

function Carrinho() {
  return (
    <main>
      <header>
        <h1>Petashop</h1>
        <p>Confira os produtos antes de finalizar a compra.</p>
      </header>

      <section aria-labelledby="titulo-carrinho">
        <h2 id="titulo-carrinho">Meu carrinho</h2>

        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>

      <ResumoCompra produtos={produtos} />

      <button type="button">Finalizar compra</button>
    </main>
  );
}

export default Carrinho;