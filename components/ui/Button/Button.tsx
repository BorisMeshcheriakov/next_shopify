import React, { ComponentType, HTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Button.module.css';
import LoadingDots from '../LoadingDots';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode | React.ReactNode[];
	onClick?: () => void;
	isLoading?: boolean;
	Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
	href?: string;
}

const Button: React.FC<Props> = ({
	children,
	className,
	isLoading = false,
	Component = 'button',

	...rest
}) => {
	const rootClassName = cn(s.root, className, {
		[s.loading]: isLoading,
	});

	return (
		<Component type="button" className={rootClassName} {...rest}>
			{children}
			{isLoading && (
				<i className="pl-2 m-0 flex">
					<LoadingDots />
				</i>
			)}
		</Component>
	);
};

export default Button;
