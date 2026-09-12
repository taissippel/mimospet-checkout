import { Link } from "react-router-dom";

function Sucesso() {
  return (
    <main>
      <h1>Compra aprovada!</h1>

      <p>Seu pedido foi realizado com sucesso.</p>

      <Link to="/">Voltar ao carrinho</Link>
    </main>
  );
}

export default Sucesso;
