"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInvoiceStore } from "@/lib/store";
import {
  TextField,
  MenuItem,
  Button,
  Grid2,
  InputLabel,
  Box,
  Typography,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { SuccessNotification } from "../notifications/success";
import { Invoice, InvoiceStatus } from "@/lib/types";

const invoiceSchema = z.object({
  name: z.string().min(1, "Invoice name is required"),
  invoiceNumber: z.string().min(1, "Invoice Number is required"),
  dueDate: z.string().min(1, "Due date is required"),
  amount: z.coerce.number().positive("Amount min 0"),
  status: z.enum(["Paid", "Unpaid", "Pending"]),
});

export function AddInvoiceForm() {
  const { addInvoice, invoices } = useInvoiceStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Omit<Invoice, "id">>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      name: "",
      invoiceNumber: "",
      dueDate: "",
      amount: "0",
      status: "",
    },
  });
  const [open, setOpen] = useState(false);

  console.log(invoices);

  const onSubmit: SubmitHandler<Omit<Invoice, "id">> = (data) => {
    addInvoice({ ...data, status: data.status as InvoiceStatus });
    reset();
    setOpen(true);
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 spacing={4} container>
            <Grid2 size={6}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField {...field} error={!!errors.name} fullWidth />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.name?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </Grid2>
            <Grid2 size={6}>
              <InputLabel htmlFor="invoiceNumber">Number</InputLabel>
              <Controller
                name="invoiceNumber"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      error={!!errors.invoiceNumber}
                      fullWidth
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.invoiceNumber?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </Grid2>

            <Grid2 size={6}>
              <InputLabel htmlFor="dueDate">Due Date</InputLabel>
              <Controller
                name="dueDate"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      type="date"
                      error={!!errors.dueDate}
                      fullWidth
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.dueDate?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </Grid2>

            <Grid2 size={6}>
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <>
                    <OutlinedInput
                      {...field}
                      type="number"
                      error={!!errors.amount}
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">Rp.</InputAdornment>
                      }
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.amount?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </Grid2>
            <Grid2 size={6}>
              <InputLabel htmlFor="status">Status</InputLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      select
                      error={!!errors.status}
                      fullWidth
                    >
                      <MenuItem value="Paid">Paid</MenuItem>
                      <MenuItem value="Unpaid">Unpaid</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                    </TextField>
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.status?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </Grid2>
            <Grid2 size={6}></Grid2>
          </Grid2>
          <Grid2 mt={4} container size={12} justifyContent={"end"}>
            <Button type="submit" variant="contained" color="primary">
              <Typography fontSize={12} px={5} py={1}>
                + Add Invoice
              </Typography>
            </Button>
          </Grid2>
        </form>
      </Box>

      <SuccessNotification open={open} onClose={() => setOpen(false)} />
    </>
  );
}
