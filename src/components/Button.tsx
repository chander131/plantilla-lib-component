import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = 'medium', backgroundColor = '', label, ...props }: ButtonProps) => {
	return (
		<ContenedorBoton size={size} backgroundColor={backgroundColor} primary={primary} {...props}>
			{label}
		</ContenedorBoton>
	);
};

interface PropsContenedorBoton {
	primary: boolean;
	backgroundColor: string;
	size: string;
}

const ContenedorBoton = styled.button<PropsContenedorBoton>`
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	color: ${({ primary }) => (primary ? 'white' : '#333')};
	background-color: ${({ primary }) => (primary ? '#1ea7fd' : 'transparent')};
	font-size: ${({ size }) => (size === 'small' ? '12' : size === 'medium' ? '14' : '16')}px;
	padding: ${({ size }) => (size === 'small' ? '10px 16px' : size === 'medium' ? '11px 20px' : '12px 24px')};
	${({ primary }) => !primary && 'box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;'}
	${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;

export default Button;
