// Esse hook é responsável por processar o pagamento e verificar se todos os dígitos do cartão são iguais, indicando uma possível tentativa de golpe. Devolvendo falha ou sucesso

import { useState } from "react";
import { todosDigitosIguais } from "../utils/pagamento";

export function usePagamento() {
  const [processando, setProcessando] = useState(false);

  async function processarPagamento(numeroCartao) {
    setProcessando(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    const tentativaDeGolpe = todosDigitosIguais(numeroCartao);

    setProcessando(false);

    return tentativaDeGolpe ? "falha" : "sucesso";
  }

  return {
    processando,
    processarPagamento,
  };
}