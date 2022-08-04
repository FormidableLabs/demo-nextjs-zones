import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as MuiButton } from "./Button";

export default {
  title: "Base Component/Button",
  component: MuiButton,
  argTypes: {
    href: { control: "text" },
  },
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: "Button",
};
