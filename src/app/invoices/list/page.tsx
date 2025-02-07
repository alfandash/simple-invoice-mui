"use client";

import { InvoiceTable } from "@/components/invoices/Table";

import { Box, Container, Typography } from "@mui/material";

import InvoiceFilter from "@/components/invoices/TableFilter";

export default function InvoiceListPage() {
  return (
    <Container>
      <Box p={2} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h5" alignContent={"center"}>
          My Invoices
        </Typography>
        <InvoiceFilter />
      </Box>

      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          m: 2,
          p: 2,
          bgcolor: "background.paper",
        }}
      >
        <InvoiceTable />
      </Box>
    </Container>
  );
}
