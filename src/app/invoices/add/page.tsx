"use client";

import { AddInvoiceForm } from "@/components/invoices/AddInvoiceForm";
import { Box, Container, Grid2, Typography } from "@mui/material";

export default function AddInvoicePage() {
  return (
    <Container>
      <Box p={2}>
        <Typography variant="h5">Add Invoice</Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          m: 2,
          bgcolor: "background.paper",
        }}
      >
        <Grid2
          sx={{
            "--Grid-borderWidth": "1px",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          }}
          mb={2}
        >
          <Grid2 p={2}>
            <Typography fontWeight={"700"}> Invoice Form</Typography>
          </Grid2>
        </Grid2>
        <Grid2 p={2}>
          <AddInvoiceForm />
        </Grid2>
      </Box>
    </Container>
  );
}
