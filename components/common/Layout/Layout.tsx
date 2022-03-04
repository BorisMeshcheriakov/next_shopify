import React from 'react';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';

import s from './Layout.module.css';
import { useUI } from '@components/ui/context';

const Layout: React.FC = ({ children }) => {
	const { isSidebarOpen, closeSidebar } = useUI();

	return (
		<div className={s.root}>
			<Navbar />
			<Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
				<CartSidebar />
			</Sidebar>
			<main className="fit">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
