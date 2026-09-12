// Aqui vou usar: MAP - para percorrer o array; KEY PRODUTO ID - para ser identificado cada produto; PRODUTO = PRODUTO - para enviar o objeto por props

import { Link } from "react-router-dom";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import logo from "../assets/img/logo_suri.png";

function Carrinho({ produtos }) {
  return (
    <main>
      <header>
        <img src={logo} alt="Logo da loja MimosPet" width="220" />
        <h1>MimosPet</h1>
        <p>Confira os produtos antes de finalizar a compra.</p>
      </header>

      <section aria-labelledby="titulo-carrinho">
        <h2 id="titulo-carrinho">Meu carrinho</h2>

        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>

      <ResumoCompra produtos={produtos} />

        <div className="acoes-carrinho">
            <Link to="/produtos">Continuar comprando</Link>
            <Link to="/pagamento">Finalizar compra</Link>
        </div>
    </main>
  );
}

export default Carrinho;