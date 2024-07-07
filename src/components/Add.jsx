import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import {
  Avatar,
  Button,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import useStore from "../hooks/useStore";
import clienteAxios from "../config/axios";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "notistack";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [empresaError, setEmpresaError] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { isEnglish } = useStore();
  const endpoint = "enviar-datos";

  const handleEmpresaChange = (event) => {
    const newEmpresa = event.target.value;
    setEmpresa(newEmpresa);
    // Validación del nombre
    if (newEmpresa.length === 0) {
      setEmpresaError("Ingrese el nombre de la empresa");
    } else {
      setEmpresaError("");
    }
  };

  const handleCorreoChange = (event) => {
    const newCorreo = event.target.value;
    setCorreo(newCorreo);

    // Validación del correo
    const correoRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    if (!correoRegex.test(newCorreo)) {
      setCorreoError("Ingresa un correo valido");
    } else {
      setCorreoError("");
    }
  };

  const IsFormValid = !empresa || !correo;

  async function sendData() {
    try {
      setLoading(true);
      const response = await clienteAxios.post(endpoint, {
        name: empresa,
        email: correo,
        comment: comentario,
      });
      console.log(response.data);
      let msg = response.data.msg;

      enqueueSnackbar(msg, {
        variant: "success",
      });
    } catch (error) {
      console.error("Error al enviar datos:", error);
      enqueueSnackbar("Error: No Se Pudo Enviar la Notificacion", {
        variant: "error",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Contact Me"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <UserBox>
            <Avatar
              src="img/JVFOTO.jpeg"
              sx={{ width: 40, height: 40 }}
            />

            <Typography
              variant="h6"
              color="gray"
              textAlign="center"
            >
              {isEnglish ? "Contact Me" : "Contactarme"}
            </Typography>

            <Button
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              onClick={sendData}
              disabled={IsFormValid}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : isEnglish ? (
                "Send/Receive"
              ) : (
                "Enviar/Recibir"
              )}
            </Button>
          </UserBox>

          <TextField
            required="true"
            sx={{ width: "100%" }}
            id="empresa"
            label={isEnglish ? "Company" : "Empresa"}
            value={empresa}
            type="search"
            variant="standard"
            onChange={handleEmpresaChange}
            error={!!empresaError}
            helperText={empresaError}
          />

          <TextField
            required="true"
            sx={{ width: "100%" }}
            id="correo"
            label={isEnglish ? "Email*" : "Correo*"}
            type="search"
            variant="standard"
            onChange={handleCorreoChange}
            error={!!correoError}
            helperText={correoError}
          />

          <TextField
            sx={{ width: "100%" }}
            id="comentario"
            multiline
            rows={2}
            placeholder={
              isEnglish
                ? "Enter a Short Comment..."
                : "Ingrese un Comentario Breve..."
            }
            type="search"
            variant="standard"
            onChange={(e) => setComentario(e.target.value)}
          />
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
