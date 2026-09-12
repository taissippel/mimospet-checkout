import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { usePagamento } from "../hooks/usePagamento";
import ResumoCompra from "../components/ResumoCompra";


const formularioSchema = z.object({
  titular: z.string().trim().min(1, "Informe o nome do titular."),

  numeroCartao: z.string().refine((valor) => {
    const numeroLimpo = valor.replace(/[\s-]/g, "");

    return /^\d{16}$/.test(numeroLimpo);
  }, "Informe um cartão com 16 dígitos."),

  validade: z.string().refine((valor) => {
    const formatoValido = /^\d{2}\/\d{2}$/.test(valor);

    if (!formatoValido) {
      return false;
    }

    const mes = Number(valor.slice(0, 2));
    return mes >= 1 && mes <= 12;
  }, "Informe uma validade no formato MM/AA."),

  cvv: z.string().regex(/^\d{3}$/, "Informe um CVV com 3 dígitos."),
});

function Pagamento({ produtos }) {
  const navigate = useNavigate();

  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formularioSchema),
  });

  async function finalizarCompra(dados) {
    const resultado = await processarPagamento(dados.numeroCartao);
    navigate(`/${resultado}`);
  }

  return (
    <main>
      <header>
        <h1>Pagamento</h1>
        <p>Preencha os dados fictícios do cartão.</p>
      </header>

      <ResumoCompra produtos={produtos} />

      <form onSubmit={handleSubmit(finalizarCompra)} noValidate>
        <div>
          <label htmlFor="titular">Nome do titular</label>

          <input
            id="titular"
            type="text"
            autoComplete="cc-name"
            aria-invalid={errors.titular ? "true" : "false"}
            aria-describedby={errors.titular ? "erro-titular" : undefined}
            {...register("titular")}
          />

          {errors.titular && (
            <p id="erro-titular" role="alert">
              {errors.titular.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="numeroCartao">Número do cartão</label>

          <input
            id="numeroCartao"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="0000 0000 0000 0000"
            aria-invalid={errors.numeroCartao ? "true" : "false"}
            aria-describedby={
              errors.numeroCartao ? "erro-numero-cartao" : undefined
            }
            {...register("numeroCartao")}
          />

          {errors.numeroCartao && (
            <p id="erro-numero-cartao" role="alert">
              {errors.numeroCartao.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="validade">Validade</label>

          <input
            id="validade"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM/AA"
            aria-invalid={errors.validade ? "true" : "false"}
            aria-describedby={errors.validade ? "erro-validade" : undefined}
            {...register("validade")}
          />

          {errors.validade && (
            <p id="erro-validade" role="alert">
              {errors.validade.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>

          <input
            id="cvv"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="000"
            aria-invalid={errors.cvv ? "true" : "false"}
            aria-describedby={errors.cvv ? "erro-cvv" : undefined}
            {...register("cvv")}
          />

          {errors.cvv && (
            <p id="erro-cvv" role="alert">
              {errors.cvv.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={processando}>
            {processando ? "Processando compra..." : "Pagar"}
        </button>
      </form>
    </main>
  );
}

export default Pagamento;