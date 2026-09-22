const nf = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });

export function formatPKR(amount: number) {
  return `Rs. ${nf.format(amount)}`;
}

export function pctOff(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}