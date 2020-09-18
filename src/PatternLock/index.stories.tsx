import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Checkbox } from "@material-ui/core";

import { PatternLock, Props } from "./PatternLock";

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
  Component: Checkbox,
  lineStyles: {
    borderColor: "green",
    borderWidth: 3,
  },
};
