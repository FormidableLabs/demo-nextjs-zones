import { Card, ImageList, ImageListItem } from "@mui/material";

type ImageBlockPropType = {
  images: { img: string; title: string }[];
};

export const ImageBlock = ({ images }: ImageBlockPropType) => {
  return (
    <Card>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Card>
  );
};
