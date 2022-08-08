import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paper as PaperComponent } from "./Paper";

export default {
  title: "Base Component/Paper",
  component: PaperComponent,
} as ComponentMeta<typeof PaperComponent>;

const Template: ComponentStory<typeof PaperComponent> = (args) => (
  <PaperComponent {...args} />
);

export const Paper = Template.bind({});
Paper.args = {
  children: "Lorem ipsum",
};
