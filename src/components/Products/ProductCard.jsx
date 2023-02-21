import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductCard({ obj }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/details/${obj.id}`)}
    >
      <CardMedia
        sx={{ height: 250, borderRadius: "1em" }}
        image={obj.image1}
        title="green iguana"
      />
      <div className="card__content">
        <h5>
          {obj.title}, {obj.country_category}
        </h5>

        <Typography variant="body2" color="text.secondary">
          {obj.description}
        </Typography>
        <h4 variant="h4">${obj.price} night</h4>
      </div>
    </div>
  );
}
