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
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Services", id: null, url: "/#services" },
    { label: "Products", id: "products", url: null },
    { label: "About", id: "about", url: null },
    { label: "CONNECT WITH US", id: null, url: "/contact" },
  ];

  return (
    <AppBar position="static" className="hero-navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo */}
        <Typography variant="h6" component="div" className="logo" sx={{ flexGrow: 1 }}>
  <a href="/" style={{ textDecoration: "none" }}>
    <img src="next-iq/images/logo.svg" alt="Logo" />
  </a>
</Typography>

        {/* Center: Links (hidden on mobile) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {links.map(({ label, id, url }) => (
              <Button
                key={label}
                color="inherit"
                className="nav-link_color"
                onClick={() => (id ? handleScroll(id) : (window.location.href = url))}
                sx={{
                  color: "#000", // Default text color
                  "&:hover": {
                    color: "#fff", // Text color on hover
                  },
                  "&.MuiButtonBase-root:active": {
                    backgroundColor: "#7832F3", // Background color on active
                    color: "#fff", // Text color on active
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right: Burger Menu Icon (only on mobile) */}
        {isMobile && (
          <IconButton
            className="burger-icon"
            color="inherit"
            onClick={handleDrawerToggle}
          >
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {links.map(({ label, id, url }) => (
            <ListItem
              button
              key={label}
              onClick={() => {
                handleDrawerToggle();
                id ? handleScroll(id) : (window.location.href = url);
              }}
            >
              <ListItemText
                primary={label}
                sx={{
                  textAlign: "center",
                  "&:hover": { color: "#7832F3", cursor: "pointer" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;