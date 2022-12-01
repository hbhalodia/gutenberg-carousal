import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

/**
 * Import Styles.
 */
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

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

	const onChangeslideToShow = ( value ) => {
		setAttributes( { 'slideToShow': value } );
	};

	const onChangenumberOfSlideToScroll = ( value ) => {
		setAttributes( { 'numberOfSlideToScroll': value } );
	};

	const onChangesliderAnimationSpeed = ( value ) => {
		setAttributes( { 'sliderAnimationSpeed': value } );
	};

	const onChangeshowSliderNextPrevArrow = () => {
		setAttributes( { 'showSliderNextPrevArrow': ! showSliderNextPrevArrow } );
	};

	const onChangeshowDotsNavigation = () => {
		setAttributes( { 'showDotsNavigation': ! showDotsNavigation } );
	};

	const onChangeinfiniteLoopSlider = () => {
		setAttributes( { 'infiniteLoopSlider': ! infiniteLoopSlider } );
	};

	const onChangeautoPlaySlider = () => {
		setAttributes( { 'autoPlaySlider': ! autoPlaySlider } );
	};

	const onChangeautoautoPlaySpeed = ( value ) => {
		setAttributes( { 'autoPlaySpeed': value } );
	};

	const onChangescreenWidth = ( value ) => {
		setAttributes( { 'screenWidth': value } );
	};

	const onChangeslideToShowResponsive = ( value ) => {
		setAttributes( { 'slideToShowResponsive': value } );
	};

	const onChangenumberOfSlideToScrollResponsive = ( value ) => {
		setAttributes( { 'numberOfSlideToScrollResponsive': value } );
	};

	const responsive = [{
		'breakpoint': screenWidth,
		'settings': {
			'slidesToShow': slideToShowResponsive,
			'slidesToScroll': numberOfSlideToScrollResponsive,
		},
	}];

	const dataSlick = {
		'slidesToShow': slideToShow,
		'slidesToScroll': numberOfSlideToScroll,
		'speed': sliderAnimationSpeed,
		'arrows': showSliderNextPrevArrow,
		'dots': showDotsNavigation,
		'autoplay': autoPlaySlider,
		'autoplaySpeed': autoPlaySpeed,
		'infinite': infiniteLoopSlider,
		'adaptiveHeight': true,
		responsive,
	};

	const dataSlickString = JSON.stringify( dataSlick );

	const blockProps = useBlockProps( {
		'data-slick': dataSlickString,
	} );

	const ALLOWED_BLOCKS = [
		'create-block/carousal-single-slide-block',
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Carousal Slider Settings', 'caraousal-slider-block' ) }>
					<RangeControl
						label={ __( 'Slides to show', 'caraousal-slider-block' ) }
						value={ slideToShow }
						onChange={ ( value ) => onChangeslideToShow( value ) }
						min={ 1 }
						max={ 5 }
					/>

					<RangeControl
						label={ __( 'Slides to scroll at a time', 'caraousal-slider-block' ) }
						value={ numberOfSlideToScroll }
						onChange={ ( value ) => onChangenumberOfSlideToScroll( value ) }
						min={ 1 }
						max={ 5 }
					/>

					<RangeControl
						label={ __( 'Slide animation speed (ms)', 'caraousal-slider-block' ) }
						value={ sliderAnimationSpeed }
						onChange={ ( value ) => onChangesliderAnimationSpeed( value ) }
						min={ 300 }
						max={ 1000 }
					/>

					<ToggleControl
						label={ __( 'Prev/Next arrows', 'caraousal-slider-block' ) }
						checked={ showSliderNextPrevArrow }
						onChange={ onChangeshowSliderNextPrevArrow }
					/>

					<ToggleControl
						label={ __( 'Dots navigation', 'caraousal-slider-block' ) }
						checked={ showDotsNavigation }
						onChange={ onChangeshowDotsNavigation }
					/>

					<ToggleControl
						label={ __( 'Infinite loop sliding', 'caraousal-slider-block' ) }
						checked={ infiniteLoopSlider }
						onChange={ onChangeinfiniteLoopSlider }
					/>

					<ToggleControl
						label={ __( 'Autoplay', 'caraousal-slider-block' ) }
						checked={ autoPlaySlider }
						onChange={ onChangeautoPlaySlider }
					/>

					{
						autoPlaySlider && (
							<RangeControl
								label={ __( 'Autoplay Speed (ms)', 'caraousal-slider-block' ) }
								value={ autoPlaySpeed }
								onChange={ ( value ) => onChangeautoautoPlaySpeed( value ) }
								min={ 1000 }
								max={ 10000 }
							/>
						)
					}
				</PanelBody>
				<PanelBody title={ __( 'Responsive Slider Settings', 'caraousal-slider-block' ) }>
					<RangeControl
						label={ __( 'Screen Width (px)', 'caraousal-slider-block' ) }
						value={ screenWidth }
						onChange={ ( value ) => onChangescreenWidth( value ) }
						min={ 300 }
						max={ 2000 }
					/>

					<RangeControl
						label={ __( 'Slides to show', 'caraousal-slider-block' ) }
						value={ slideToShowResponsive }
						help={ __( '# of slides to show at a given width', 'caraousal-slider-block' ) }
						onChange={ ( value ) => onChangeslideToShowResponsive( value ) }
						min={ 1 }
						max={ 5 }
					/>

					<RangeControl
						label={ __( 'Slides to scroll at a time', 'caraousal-slider-block' ) }
						value={ numberOfSlideToScrollResponsive }
						onChange={ ( value ) => onChangenumberOfSlideToScrollResponsive( value ) }
						min={ 1 }
						max={ 5 }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		</>
	);
}
