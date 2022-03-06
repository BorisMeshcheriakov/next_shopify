import React from 'react';
import { AppProps } from 'next/app';
import '@assets/main.css';
import 'keen-slider/keen-slider.min.css';
import { UIProvider, useUI } from '@components/ui/context';

const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: React.FC } }) {
	const Layout = Component.Layout ?? Noop;
	const ui = useUI();
	console.log(ui);

	return (
		<UIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UIProvider>
	);
}

export default MyApp;
