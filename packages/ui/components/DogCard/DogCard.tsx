import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type DogCardProps = {
  name: React.ReactNode;
  description: string;
  imageUrl: string;
};

export const DogCard = ({ name, description, imageUrl }: DogCardProps) => {
  return (
    <Card>
      <CardMedia image={imageUrl} component="img" height="200" />
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
