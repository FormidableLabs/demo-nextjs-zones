import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageBlock as ImageBlockComponent } from "./ImageBlock";

export default {
  title: "ImageBlock Component",
  component: ImageBlockComponent,
} as ComponentMeta<typeof ImageBlockComponent>;

const Template: ComponentStory<typeof ImageBlockComponent> = (args) => (
  <ImageBlockComponent {...args} />
);

export const ImageBlock = Template.bind({});
ImageBlock.args = {
  images: [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
  ],
};
