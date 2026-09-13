// Aqui vou usar: MAP - para percorrer o array; KEY PRODUTO ID - para ser identificado cada produto; PRODUTO = PRODUTO - para enviar o objeto por props

import { Link } from "react-router-dom";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import logo from "../assets/img/logo_suri.png";

function Carrinho({ produtos }) {
  return (
    <main>
      <header className="hero">
        <div className="hero-logo">
          <img
            src={logo}
            alt="Logo da loja MimosPet"
            className="logo-mimospet"
          />
        </div>

        <div className="hero-conteudo">
          <span className="hero-selo">🐾 Amor em cada escolha</span>

          <h1>Mimos para quem faz parte da família.</h1>

          <p>
            Produtos escolhidos para deixar a rotina do seu pet mais feliz,
            confortável e divertida.
          </p>

          <div className="hero-beneficios">
            <span>✓ Compra segura</span>
            <span>✓ Produtos selecionados</span>
            <span>✓ Muito amor envolvido</span>
          </div>

        </div>
      </header>

      <section aria-labelledby="titulo-carrinho">
        <h2 id="titulo-carrinho">Meu carrinho</h2>

        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>

      <ResumoCompra produtos={produtos} />

      <div className="acoes-carrinho">
        <Link to="/produtos" translate="no">Selecionar mais minos</Link>
        <Link to="/pagamento" translate="no">Finalizar compra</Link>
      </div>
    </main>
  );
}

export default Carrinho;