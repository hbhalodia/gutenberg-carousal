import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {


	const blockProps = useBlockProps( {
		'data-type': 'gb-carousal-slide',
	} );

	return (
		<div { ...blockProps } >
			<InnerBlocks
			/>
		</div>

	);
}
