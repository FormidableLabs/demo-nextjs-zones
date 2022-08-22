import * as React from "react";
import { useRouter } from "next/router";
import dogs from "@formidable/dogs";
import { Typography } from "@mfezones/ui";

export default function DogPage() {
  const router = useRouter();
  const name = router.query.name as string;

  const dog = dogs.find((dog) => dog.name === name);

  if (!dog) return null;

  return (
    <div>
      <Typography variant="h1">{dog.name}</Typography>
      <Typography gutterBottom>{dog.description}</Typography>
      <img src={dog.imageUrl} alt={dog.name} width="100%" />
    </div>
  );
}
