import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const links = ["Services", "Products", "About", "CONNECT WITH US"];

  return (
    <AppBar position="static" className="hero-navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Typography variant="h6" component="div" className="logo" sx={{ flexGrow: 1 }}>
          <img src="next-iq/images/logo.svg" alt="Logo" />
        </Typography>

        {/* Center: Links (hidden on mobile) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {links.map((link) => (
              <Button key={link} color="inherit" className="nav-link_color">
                {link}
              </Button>
            ))}
          </Box>
        )}

        {isMobile ? (
          <IconButton className="burger-icon" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton className="burger-icon" color="inherit">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 250 } }}
      >
        <List>
          {links.map((link) => (
            <ListItem button key={link} onClick={handleDrawerToggle}>
              <ListItemText primary={link} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
