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
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4 } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const { isEnglish, handleLanguageChange, handleClickOp, initializePost } =
    useStore();

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

        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />

          <Brightness4 style={{ verticalAlign: "middle" }} />
        </Box>

        <UserBox>
          <Switch
            checked={isEnglish}
            onChange={handleLanguageChange}
            color="outline"
          />
          {isEnglish ? "ENG" : "ESP"}
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="img/JVFOTO.jpeg"
          />
          <Typography variant="span">Jorge</Typography>

          <MenuIcon
            onClick={(e) => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
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
        <MenuItem onClick={() => handleClickOp(1)}>
          {isEnglish ? "My Thoughts" : "Mis Pensamientos"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(2)}>
          {isEnglish ? "Contact Me" : "Contactame"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(3)}>
          {isEnglish ? "My Experience" : "Mi Experiencia"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(4)}>
          {isEnglish ? "My Academic Degrees" : "Mis Grados Academicos"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(5)}>
          {isEnglish ? "My Skills" : "Mis Habilidades"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(6)}>
          {isEnglish ? "My Languages" : "Mis Lenguajes"}
        </MenuItem>
        <MenuItem onClick={() => handleClickOp(7)}>
          {isEnglish ? "My Hobbies" : "Mis Diversiones"}
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
