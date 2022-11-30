import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {

	const { attributes } = props;
	const {
		slideToShow,
		numberOfSlideToScroll,
		sliderAnimationSpeed,
		showSliderNextPrevArrow,
		showDotsNavigation,
		infiniteLoopSlider,
		autoPlaySlider,
		autoPlaySpeed,
		screenWidth,
		slideToShowResponsive,
		numberOfSlideToScrollResponsive
	} = attributes;

	const dataSlick = {
		'slidesToShow': slideToShow,
		'slidesToScroll': numberOfSlideToScroll,
		'speed': sliderAnimationSpeed,
		'arrows': showSliderNextPrevArrow,
		'dots': showDotsNavigation,
		'autoplay': autoPlaySlider,
		'autoplaySpeed': autoPlaySpeed,
		'infinite': infiniteLoopSlider,
	};

	const dataSlickString = JSON.stringify( dataSlick );

	const blockProps = useBlockProps.save( {
		'data-slick': dataSlickString,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
