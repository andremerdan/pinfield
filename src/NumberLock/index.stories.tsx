import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "@material-ui/core";

import { NumberLock, Props } from ".";

export default {
	title: "Component/NumberLock",
	component: NumberLock,
	argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <NumberLock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	Component: Button,
};
