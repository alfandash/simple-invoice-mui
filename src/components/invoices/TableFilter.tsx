"use client";

import { useState } from "react";
import { InvoiceStatus } from "@/lib/types";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid2, MenuItem, Select, TextField } from "@mui/material";
import { useInvoiceStore } from "@/lib/store";

export default function InvoiceFilter() {
  const { searchQuery, setSearchQuery, statusFilter, setStatusFilter } =
    useInvoiceStore();
  const [query, setQuery] = useState(searchQuery);

  return (
    <Grid2 spacing={3} container>
      <TextField
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchQuery(query);
          }
        }}
        size="small"
        InputProps={{
          style: {
            height: "40px",
            fontSize: "12px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 20, color: "#9ca3af" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& fieldset": {
            borderRadius: 3,
            border: "1px solid #eaeaea",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: 3,
            "&:hover fieldset": {
              borderColor: "#eaeaea",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#9ca3af",
            opacity: 1,
          },
        }}
      />
      <Select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value as InvoiceStatus | "All")
        }
        sx={{
          borderRadius: 3,
          "& fieldset": {
            borderRadius: 3,
            border: "1px solid #eaeaea",
          },
          backgroundColor: "white",
          height: "40px",
          fontSize: "12px",
          color: "#9ca3af",
          "&:hover fieldset": {
            borderColor: "#eaeaea",
          },
          "& .MuiSelect-select": {
            padding: "8px 14px",
          },
        }}
      >
        <MenuItem value="All">All Status</MenuItem>
        <MenuItem value="Paid">Paid</MenuItem>
        <MenuItem value="Unpaid">Unpaid</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
      </Select>
    </Grid2>
  );
}
