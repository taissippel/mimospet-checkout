export function todosDigitosIguais(numeroCartao) {
  const numeroLimpo = numeroCartao.replace(/[\s-]/g, "");
  const primeiroDigito = numeroLimpo[0];

  return numeroLimpo
    .split("")
    .every((digito) => digito === primeiroDigito);
}
