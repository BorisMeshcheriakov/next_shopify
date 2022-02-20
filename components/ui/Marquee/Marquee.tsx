import React from 'react';
import Ticker from 'react-ticker';
import s from './Marquee.module.css';

type Props = {
	children: React.ReactNode[];
};

const Marquee: React.FC<Props> = ({ children }) => {
	return (
		<div className={s.root}>
			<Ticker offset={80}>{() => <div className={s.container}>{children}</div>}</Ticker>
		</div>
	);
};

export default Marquee;
