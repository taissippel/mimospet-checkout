//O Reduce vai ser criado para passar pelos produtos e transformar o array em um único valor: o total de compras

function ResumoCompra({ produtos }) {
  const total = produtos.reduce((acumulador, produto) => { 
    const subtotal = produto.precoUnitario * produto.quantidade;
    return acumulador + subtotal;
  }, 0);

  return (
    <aside>
      <h2>Resumo da compra</h2>

      <p>
        Total:{" "}
        <strong>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>
    </aside>
  );
}

export default ResumoCompra;