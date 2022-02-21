import Link from 'next/link';
import React from 'react';
import { Bag as Cart, Heart } from '@components/icons';

import s from './Usernav.module.css';

const Usernav: React.FC = () => {
	return (
		<nav>
			<ul className={s.list}>
				<li className={s.item}>
					<Cart />
				</li>
				<li className={s.item}>
					<Link href="/">
						<a>
							<Heart />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Usernav;
