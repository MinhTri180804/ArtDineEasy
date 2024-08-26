export default function formatCurrencyVND(amount: string | number) {
  return amount
    .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    .replace('₫', '')
    .trim();
}
