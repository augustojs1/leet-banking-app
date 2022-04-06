export function priceFormatter(price: number) {
  const formattedPrice = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return formattedPrice;
}
