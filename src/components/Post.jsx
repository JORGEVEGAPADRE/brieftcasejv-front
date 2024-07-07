import useStore from "../hooks/useStore";
import * as React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";


const desCad = [
  "Mis Pensamientos",
  "Contactame",
  "Mis Experiencias Laborales",
  "Mi Preparacion Academica",
  "Mis Habilidades",
  "Los Idiomas que Manejo",
  "Mis Hobbies",
];

const desCadEnglish = [
  "My Thoughts",
  "Contact Me",
  "My Experience",
  "My Academic Degrees",
  "My Skills",
  "My Languages",
  "Mis Hobbies",
];

function Post() {
  const { isEnglish } = useStore();
  const getTitle = (id) => {
    if (isEnglish) {
      return desCadEnglish[id - 1];
    } else {
      return desCad[id - 1];
    }
  };

  let cad = "";

  const getCad = (id) => {
    if (isEnglish) {
      switch (id) {
        case 1:
          cad = "Tho";

          // code block
          break;
        case 2:
          cad = "Con";

          // code block
          break;
        case 3:
          cad = "Exp";

          // code block
          break;
        case 4:
          cad = "Edu";

          // code block
          break;
        case 5:
          cad = "Ski";

          // code block
          break;
        case 6:
          cad = "Lan";

          // code block
          break;
        case 7:
          cad = "Hob";

          // code block
          break;
        default:
          cad = "Exp";

        // code block
      }
    } else {
      switch (id) {
        case 1:
          cad = "Pen";

          // code block
          break;
        case 2:
          cad = "Con";

          // code block
          break;
        case 3:
          cad = "Exp";

          // code block
          break;
        case 4:
          cad = "Edu";

          // code block
          break;
        case 5:
          cad = "Hab";

          // code block
          break;
        case 6:
          cad = "Len";

          // code block
          break;
        case 7:
          cad = "Hob";

          // code block
          break;
        default:
          cad = "Exp";
      }
    }

    return cad;
  };

  const { elements } = useStore();

  return (
    <React.Fragment>
      {elements.map((element) => (
        <Card key={element.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: "red" }}
                aria-label="recipe"
              >
                {getCad(element.categoria_id)}
              </Avatar>
            }
            title={getTitle(element.categoria_id)}
          />
          <CardMedia
            component="img"
            height="20%"
            image={`/img/${element.categoria_id}.jpeg`}
            alt="Imagen No Encontrada"
          />
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontStyle: "oblique", m: 1 }}
            >
              {element.texto1}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontStyle: "oblique", m: 1 }}
            >
              {element.texto2}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {element.texto3}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {element.texto4}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {element.texto5}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
}

export default Post;
