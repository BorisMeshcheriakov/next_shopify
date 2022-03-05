import { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import ProductCard from '@components/product/ProductCard';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
	const config = getConfig();
	const products = await getAllProducts(config);

	return {
		props: { products },
		revalidate: 4 * 60 * 60,
	};
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Grid>
				{products.slice(0, 3).map((product) => (
					<ProductCard variant="simple" key={product.id} product={product} />
				))}
			</Grid>
			<Hero
				headline="Biscuit cookie fruitcake"
				description="cheesecake donut cheesecake jelly-o lemon drops cake. Jujubes caramels lollipop gingerbread dessert cheesecake jujubes carrot cake toffee."
			/>
			<Marquee>
				{products.slice(0, 3).map((product) => (
					<ProductCard variant="slim" key={product.id} product={product} />
				))}
			</Marquee>
			<Grid layout="B">
				{products.slice(0, 3).map((product) => (
					<ProductCard variant="simple" key={product.id} product={product} />
				))}
			</Grid>
			<Marquee variant="secondary">
				{products.slice(0, 3).map((product) => (
					<ProductCard variant="slim" key={product.id} product={product} />
				))}
			</Marquee>
		</>
	);
}

Home.Layout = Layout;
