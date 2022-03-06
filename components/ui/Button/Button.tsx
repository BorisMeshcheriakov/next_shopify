import React from 'react';
import cn from 'classnames';

import s from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode | React.ReactNode[];
	onClick: () => void;
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => {
	return (
		<button type="button" className={cn(s.root, className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
