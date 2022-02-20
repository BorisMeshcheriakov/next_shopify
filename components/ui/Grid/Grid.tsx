import React from 'react';
import s from './Grid.module.css';
import cn from 'classnames';

interface Props {
	children: React.ReactNode[];
	layout?: 'A' | 'B';
}

const Grid: React.FC<Props> = ({ children, layout = 'A' }) => {
	const rootClassname = cn(s.root, {
		[s.layoutA]: layout === 'A',
		[s.layoutB]: layout === 'B',
	});
	return <div className={rootClassname}>{children}</div>;
};

export default Grid;
