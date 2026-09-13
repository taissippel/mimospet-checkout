import { Link } from "react-router-dom";
import logo from "../assets/img/logo_suri.png";

function Sucesso() {
  return (
    <main className="pagina-resultado" translate="no">
      <section className="card-sucesso" aria-labelledby="titulo-sucesso">
        <img
          src={logo}
          alt="Logo da loja MimosPet"
          className="logo-sucesso"
        />

        <div className="icone-sucesso" aria-hidden="true">
          ✓
        </div>

        <span className="selo-sucesso">Pedido confirmado</span>

        <h1 id="titulo-sucesso">Compra aprovada!</h1>

        <p className="mensagem-principal">
          Oba! Seu pedido foi realizado com sucesso.
        </p>

        <div className="mensagem-carinho">
          <span aria-hidden="true">🐾</span>

          <p>
            Obrigada por escolher a MimosPet para cuidar de quem enche
            sua vida de amor. Cada mimo foi escolhido pensando na
            felicidade do seu pet.
          </p>
        </div>

        <p className="informacao-pedido">
          Agora é só aguardar. Em breve, você será notificado que os mimos estarão a caminho!
        </p>

        <div className="acoes-sucesso">
          <Link to="/produtos">Escolher novos mimos</Link>

          <Link to="/" className="link-secundario">
            Voltar ao carrinho
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Sucesso;