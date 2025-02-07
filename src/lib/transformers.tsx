export function formatRupiah(value: string): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(value));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formatted = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  const [day, month, year] = formatted.split(" ");
  return `${month} ${day}, ${year}`;
}
