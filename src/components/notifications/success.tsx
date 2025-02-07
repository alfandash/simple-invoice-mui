import { AlertTitle, Box, Grid2, Snackbar, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface SuccessNotificationProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessNotification({
  open,
  onClose,
}: SuccessNotificationProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
      const timer = setTimeout(() => {
        onClose();
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Snackbar
      open={visible}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Grid2
        container
        sx={{
          alignItems: "center",
          backgroundColor: "#E6FAF0",
          borderLeft: "5px solid #009A60",
          borderRadius: 1,
          padding: "12px 16px",

          minWidth: "800px",
        }}
      >
        <CheckCircle sx={{ color: "#009A60", marginRight: 2 }} />
        <Grid2>
          <AlertTitle sx={{ fontWeight: "bold", marginBottom: 0 }}>
            <Typography>Invoice added successfully!</Typography>
          </AlertTitle>
          <Box>
            <Typography sx={{ fontSize: "14px", color: "grey" }}>
              You can view and manage your invoice in the &apos;My
              Invoices&apos; section.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Snackbar>
  );
}
