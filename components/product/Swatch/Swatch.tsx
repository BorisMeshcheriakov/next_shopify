import React from 'react';
import s from './Swatch.module.css';
import { Check } from '@components/icons';
import cn from 'classnames';
import { isDark } from '@lib/color';

type Props = {
	color?: string;
	label?: string;
	active?: boolean;
	variant?: 'size' | 'color' | string;
	onClick: () => void;
};

const Swatch: React.FC<Props> = ({ color, label, variant, active, ...rest }) => {
	label = label?.toLowerCase();
	variant = variant.toLowerCase();

	const rootClassname = cn(s.root, {
		[s.active]: active,
		[s.color]: color,
		[s.size]: variant === 'size',
		[s.dark]: color && isDark(color),
	});

	return (
		<button style={color ? { backgroundColor: color } : {}} className={rootClassname} {...rest}>
			{variant === 'color' && active && (
				<span>
					<Check />
				</span>
			)}

			{variant === 'size' ? label : null}
		</button>
	);
};

export default Swatch;
