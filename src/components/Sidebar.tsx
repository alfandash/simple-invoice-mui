"use client";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";

const DRAWER_WIDTH = 260;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          bgcolor: "#1a1f2b",
          border: "none",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ color: "white", fontWeight: "bold", mb: 4 }}
        >
          InvoiceHub
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "grey.500",
            display: "block",
            mb: 2,
            ml: 2,
          }}
        >
          MENU
        </Typography>

        <List sx={{ p: 0 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/invoices/add"
              selected={pathname === "/invoices/add"}
              sx={{
                borderRadius: 2,
                mb: 1,
                "&.Mui-selected": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.12)",
                  },
                },
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Invoice"
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "white",
                    fontSize: "0.875rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/invoices/list"
              selected={pathname === "/invoices/list"}
              sx={{
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.12)",
                  },
                },
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="My Invoices"
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "white",
                    fontSize: "0.875rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
