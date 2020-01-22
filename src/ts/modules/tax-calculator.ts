export default function taxCalculator(price: number, tax:number) {
  return Math.round(price * tax);
}
