export const formatPrice = (price: number): string =>
  Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(price);
