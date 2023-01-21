import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../../assets/CopiaPerfil.jpg";
import { ProjectType } from "../../../models";
import { IconButton } from "@mui/material";
import { MdFavorite } from "react-icons/md";

const ProjectCard: React.FC<ProjectType> = ({ id, name, categoryName }) => {
  return (
    <Card sx={{ maxHeight: 400 }}>
      <CardMedia
        component='img'
        alt='project img'
        height='40'
        image={img}
        sx={{ maxHeight: 200 }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ color: "#181816", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {categoryName}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size='small'
          sx={{ color: "#ff3366" }}
          aria-label='favorite'
        >
          <MdFavorite />
        </IconButton>
        <Button size='small' sx={{ color: "#33ccff" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
