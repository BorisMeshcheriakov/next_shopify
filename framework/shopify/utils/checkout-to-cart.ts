import { Checkout, Maybe } from '@framework/schema';
import { normalizeCart } from './normalize';

const checkoutToCart = (checkout?: Maybe<Checkout | undefined>) => {
	if (!checkout) {
		throw new Error('Missing checkout object!');
	}

	return normalizeCart(checkout);
};

export default checkoutToCart;
