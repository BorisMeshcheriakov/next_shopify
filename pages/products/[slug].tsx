import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths, getProduct } from '@framework/product';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const config = getConfig();
	const { products } = await getAllProductsPaths(config);
	return {
		paths: products.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
	const config = getConfig();
	const { product } = await getProduct({
		config,
		variables: { slug: params!.slug },
	});
	return {
		props: {
			product,
		},
	};
};

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			{product?.name}
			{product?.slug}
			{product?.path}
			{product?.price.value}
			{product?.price.currencyCode}
		</div>
	);
}

ProductSlug.Layout = Layout;
