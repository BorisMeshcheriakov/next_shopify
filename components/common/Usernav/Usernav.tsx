import Link from 'next/link';
import React from 'react';
import { Bag as Cart, Heart } from '@components/icons';
import { useUI } from '@components/ui/context';

import s from './Usernav.module.css';
import useCart from '@framework/cart/use-cart';

const Usernav: React.FC = () => {
	const { openSidebar } = useUI();
	const { data } = useCart();

	return (
		<nav>
			<ul className={s.list}>
				<li className={s.item}>
					<Cart onClick={openSidebar} />
				</li>
				<li className={s.item}>
					<Link href="/wishlist">
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
