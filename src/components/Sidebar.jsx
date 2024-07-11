import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Button from "@mui/material/Button";
import useStore from "../hooks/useStore";
import { Brightness4 } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  const { handleClickOp, initializePost, isEnglish } = useStore();

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "block", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(1)}>
              <ListItemIcon>
                <PsychologyAltIcon />
              </ListItemIcon>

              <ListItemText
                primary={isEnglish ? "My Thoughts" : "Mis Pensamientos"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(2)}>
              <ListItemIcon>
                <ConnectWithoutContactIcon />
              </ListItemIcon>

              <ListItemText primary={isEnglish ? "Contact Me" : "Contactame"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(3)}>
              <ListItemIcon>
                <EngineeringIcon />
              </ListItemIcon>

              <ListItemText
                primary={isEnglish ? "My Experience" : "Mi Experiencia"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(4)}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>

              <ListItemText
                primary={
                  isEnglish ? "My Academic Degrees" : "Mis Grados Academicos"
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(5)}>
              <ListItemIcon>
                <FormatListNumberedRtlIcon />
              </ListItemIcon>

              <ListItemText
                primary={isEnglish ? "My Skills" : "Mis Habilidades"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(6)}>
              <ListItemIcon>
                <GTranslateIcon />
              </ListItemIcon>

              <ListItemText
                primary={isEnglish ? "My Languages" : "Mis Lenguajes"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClickOp(7)}>
              <ListItemIcon>
                <SportsSoccerIcon />
              </ListItemIcon>

              <ListItemText
                primary={isEnglish ? "My Hobbies" : "Mis Diversiones"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness4 />
              </ListItemIcon>

              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />

              <Button
                variant="contained"
                color="success"
                onClick={initializePost}
                disableElevation
              >
                {isEnglish ? "Start" : "Inicio"}
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
