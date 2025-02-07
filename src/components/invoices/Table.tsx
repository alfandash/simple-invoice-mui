import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Invoice } from "@/lib/types";
import { useInvoiceStore } from "@/lib/store";
import { formatDate, formatRupiah } from "@/lib/transformers";

interface ColumnConfig {
  label: string;
  key: keyof Invoice;
}

const columns: ColumnConfig[] = [
  { label: "Invoice", key: "name" },
  { label: "Due Date", key: "dueDate" },
  { label: "Status", key: "status" },
  { label: "Amount", key: "amount" },
];

export function InvoiceTable() {
  const { invoices, deleteInvoice, searchQuery, statusFilter } =
    useInvoiceStore();

  const filteredInvoices = invoices.filter(
    (invoice) =>
      (statusFilter === "All" || invoice.status === statusFilter) &&
      invoice.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "whitesmoke",
              "& .MuiTableCell-root": {
                border: "none",
              },
            }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.key}>{column.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                sx={{
                  "& .MuiTableCell-root": {
                    border: "none",
                  },
                }}
              >
                {columns.map((column) => {
                  if (column.key === "name") {
                    return (
                      <TableCell key={column.key}>
                        <Box flexDirection={"column"}>
                          <Typography fontSize={"12px"}>
                            {invoice[column.key]}
                          </Typography>
                          <Typography fontSize={"12px"} color="grey">
                            {invoice["invoiceNumber"]}
                          </Typography>
                        </Box>
                      </TableCell>
                    );
                  }

                  if (column.key === "status") {
                    return (
                      <TableCell key={column.key}>
                        <Box flexDirection={"column"}>
                          <Chip
                            label={invoice[column.key]}
                            color={
                              invoice[column.key] === "Paid"
                                ? "primary"
                                : invoice[column.key] === "Unpaid"
                                ? "error"
                                : invoice[column.key] === "Pending"
                                ? "warning"
                                : "default"
                            }
                          />
                        </Box>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={column.key}>
                      <Typography fontSize={"12px"}>
                        {column.key === "amount"
                          ? formatRupiah(invoice[column.key])
                          : column.key === "dueDate"
                          ? formatDate(invoice[column.key])
                          : invoice[column.key]}
                      </Typography>
                    </TableCell>
                  );
                })}
                <TableCell>
                  <IconButton onClick={() => deleteInvoice(invoice.id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
