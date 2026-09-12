//Primeiro componente reutilizável. Ele recebe um produto através de props e calcula o subtotal.

function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <article>
      <h2>{produto.nome}</h2>

      <p>
        Preço unitário:{" "}
        {produto.precoUnitario.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <p>Quantidade: {produto.quantidade}</p>

      <p>
        Subtotal:{" "}
        {subtotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </article>
  );
}

export default ItemCarrinho;