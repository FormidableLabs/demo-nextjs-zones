import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paper as MuiPaper } from "./Paper";

export default {
  title: "Base Component/Paper",
  component: MuiPaper,
} as ComponentMeta<typeof MuiPaper>;

const Template: ComponentStory<typeof MuiPaper> = (args) => (
  <MuiPaper {...args} />
);

export const Paper = Template.bind({});
Paper.args = {
  children: "Lorem ipsum",
};
