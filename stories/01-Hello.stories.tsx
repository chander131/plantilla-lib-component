import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hello } from '../src';

export default {
	title: 'Saludos/Hello',
	component: Hello,
	argTypes: {
		color: { control: 'color' },
	},
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const Bienvenida = Template.bind({});
Bienvenida.args = {
	saludo: 'Hola bienvenid@!',
};

export const Despedida = Template.bind({});
Despedida.args = {
	saludo: 'Adios, fue un gusto.',
};

export const Mundo = Template.bind({});
Mundo.args = { saludo: undefined };
