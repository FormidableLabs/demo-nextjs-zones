import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Nav as NavComponent } from "./Nav";

export default {
  title: "App Components/Nav",
  component: NavComponent,
} as ComponentMeta<typeof NavComponent>;

const Template: ComponentStory<typeof NavComponent> = (args) => (
  <NavComponent />
);

export const Nav = NavComponent.bind({});
