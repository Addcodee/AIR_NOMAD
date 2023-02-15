import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/details")}
      className="card"
      sx={{ maxWidth: 300 }}
    >
      <CardMedia
        sx={{ height: 250, borderRadius: "1em" }}
        image="https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <div className="card__content">
        <h5>Comfort House, Finland</h5>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet.
        </Typography>
        <h4 variant="h4">$2100 night</h4>
      </div>
    </Card>
  );
}
