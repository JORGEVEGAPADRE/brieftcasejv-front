import * as React from "react";
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
import { useState, useEffect } from "react";
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
  const { isEnglish, initializePost } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [empresaError, setEmpresaError] = useState(
    "Ingrese el nombre de la empresa"
  );
  const [correoError, setCorreoError] = useState("Ingresa un correo valido");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const endpoint = "enviar-datos";

  useEffect(() => {
    setEmpresa("");
    setCorreo("");
    setComentario("");
    setIsFormValid(false);
  }, [open]);

  const handleEmpresaChange = (event) => {
    const newEmpresa = event.target.value;

    // Validación del nombre
    if (newEmpresa.trim() == "") {
      console.log("pase al error empresa");

      setEmpresaError("Ingrese el nombre de la empresa");
    } else {
      setEmpresa(newEmpresa);
      setEmpresaError("");
    }
    buttonActivate();
  };

  const handleCorreoChange = (event) => {
    const newCorreo = event.target.value;
    console.log(newCorreo);

    // Validación del correo
    const correoRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    if (!correoRegex.test(newCorreo)) {
      console.log("pase al error correo");
      setCorreoError("Ingresa un correo valido");
    } else {
      setCorreo(newCorreo);
      setCorreoError("");
    }
    buttonActivate();
  };
  const buttonActivate = () => {
    if (empresaError == "" && correoError == "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

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
        title="Contact Me"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(40% - 25px)", md: 30 },
        }}
      >
        <Fab
          onClick={(e) => setOpen(true)}
          color="primary"
          aria-label="add"
        >
          <AddIcon style={{ fontSize: "30px", verticalAlign: "middle" }} />
        </Fab>
      </Tooltip>
      <Tooltip
        title="Contact Me"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(60% - 25px)", md: 15 },
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Fab
          onClick={initializePost}
          color="success"
          aria-label="add"
        >
          {isEnglish ? "Start" : "Inicio"}
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
              disabled={!isFormValid}
            >
              {isEnglish ? "Send/Receive" : "Enviar/Recibir"}
            </Button>
          </UserBox>

          <TextField
            isrequired="true"
            sx={{ width: "100%" }}
            id="empresa"
            label={isEnglish ? "Company*" : "Empresa*"}
            type="text"
            variant="standard"
            onChange={handleEmpresaChange}
            error={!!empresaError}
            helperText={empresaError}
          />

          <TextField
            isrequired="true"
            sx={{ width: "100%" }}
            id="correo"
            label={isEnglish ? "Email*" : "Correo*"}
            type="email"
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
            type="text"
            variant="standard"
            onChange={(e) => setComentario(e.target.value)}
          />
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
