import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PatternLock, Props } from ".";

export default {
  title: "Component/PatternLock",
  component: PatternLock,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PatternLock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  fields: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  gridSize: 3,
};
