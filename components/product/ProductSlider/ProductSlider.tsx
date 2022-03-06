import React from 'react';
import KeenSlider from 'keen-slider';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import s from './ProductSlider.module.css';

const ProductSlider: React.FC = ({ children }) => {
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		loop: true,
		slideChanged(s) {
			console.log('changing to slide : ');
		},
	});

	return (
		<div className={s.root}>
			<div ref={sliderRef} className="keen-slider h-full transition-opacity">
				<button
					className={cn(s.leftControl, s.control)}
					onClick={(e: any) => e.stopPropagation() || slider.current?.prev()}
				/>
				<button
					className={cn(s.rightControl, s.control)}
					onClick={(e: any) => e.stopPropagation() || slider.current?.next()}
				/>
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, {
							className: `${
								child.props.className ? `${child.props.className}` : ''
							} keen-slider__slide`,
						});
					}
					return child;
				})}
			</div>
		</div>
	);
};

export default ProductSlider;
