import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Searchbar as SearchbarComponent } from "./Searchbar";

export default {
  title: "Test/Searchbar",
  component: SearchbarComponent,
} as ComponentMeta<typeof SearchbarComponent>;

const Template: ComponentStory<typeof SearchbarComponent> = (args) => (
  <Searchbar {...args} />
);

export const Searchbar = Template.bind({});
Searchbar.args = {
  placeholder: "search here",
  label: "search for anything",
};
