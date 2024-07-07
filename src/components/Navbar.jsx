import {Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar, 
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import useStore from "../hooks/useStore";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isEnglish, handleLanguageChange } = useStore();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Jorge Gabriel Vega Ovalles
        </Typography>

        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {isEnglish
            ? "Software Developer Engineer ( Desktop/Web ) Full Stack"
            : "Ingeniero Desarrollador de Software ( Desktop/Web ) Full Stack"}
        </Typography>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Icons>
          <Switch
            checked={isEnglish}
            onChange={handleLanguageChange}
            color="outline"
          />
          {isEnglish ? "English" : "Español"}

          <Avatar
            sx={{ width: 50, height: 50 }}
            src="img/JVFOTO.jpeg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="img/JVFOTO.jpeg"
          />
          <Typography variant="span">Jorge</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem> {isEnglish ? "Profile" : "Perfil"}</MenuItem>
        <MenuItem> {isEnglish ? "My Account" : "My Cuenta"}</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
