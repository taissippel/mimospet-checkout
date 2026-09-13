import { Link } from "react-router-dom";

function Falha() {
  return (
    <main className="pagina-resultado" translate="no">
      <section className="card-falha" aria-labelledby="titulo-falha">
        <div className="icone-alerta" aria-hidden="true">
          !
        </div>

        <span className="selo-alerta">Atenção necessária</span>

        <h1 id="titulo-falha">Compra não aprovada</h1>

        <p className="mensagem-golpe" role="alert">
          tentativa de golpe
        </p>

        <div className="orientacao-falha">
          <span aria-hidden="true">⚠️</span>

          <div>
            <h2>Preste mais atenção</h2>

            <p>
              O número informado possui todos os dígitos iguais. Confira
              os dados do cartão e tente novamente.
            </p>
          </div>
        </div>

        <p className="mensagem-seguranca">
          Para sua segurança, a MimosPet não concluiu esta operação.
        </p>

        <Link to="/pagamento" className="botao-tentar">
          Corrigir dados e tentar novamente
        </Link>
      </section>
    </main>
  );
}

export default Falha;