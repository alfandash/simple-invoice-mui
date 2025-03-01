export type InvoiceStatus = "Paid" | "Unpaid" | "Pending" | "";

export interface Invoice {
  id: string;
  name: string;
  invoiceNumber: string;
  dueDate: string;
  amount: string;
  status: InvoiceStatus;
}
