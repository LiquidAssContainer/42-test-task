export const formatPrice = (price: number): string =>
  Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'narrowSymbol',
  }).format(price);
