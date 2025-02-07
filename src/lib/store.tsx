import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Invoice, InvoiceStatus } from "./types";

interface InvoiceStore {
  invoices: Invoice[];
  addInvoice: (invoice: Omit<Invoice, "id">) => void;
  deleteInvoice: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: InvoiceStatus | "All") => void;
  searchQuery: string;
  statusFilter: InvoiceStatus | "All";
}

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: [
    {
      name: "invoice name",
      invoiceNumber: "INV123123",
      dueDate: "1991-02-10",
      amount: "1234",
      status: "Unpaid",
      id: "26fd6472-a75a-4f61-b709-2f226d17f923",
    },
  ],
  searchQuery: "",
  statusFilter: "All",
  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [...state.invoices, { ...invoice, id: uuidv4() }],
    })),
  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),
  setSearchQuery: (query) => set(() => ({ searchQuery: query })),
  setStatusFilter: (status) => set(() => ({ statusFilter: status })),
}));
