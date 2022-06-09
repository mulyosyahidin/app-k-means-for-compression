import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";

export const Items = (
  <React.Fragment>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      <Link to="/" sx={{ textDecoration: 'none' }}>
        <ListItemText primary="Kompresi" />
      </Link>
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
      <Link to="/history">
        <ListItemText primary="Riwayat" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
