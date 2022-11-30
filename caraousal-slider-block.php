<?php
/**
 * Plugin Name:       Caraousal Slider Block
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       caraousal-slider-block
 *
 * @package           create-block
 */

define( 'CARAOUSAL_SLIDER_BLOCK_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'CARAOUSAL_SLIDER_BLOCK_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_caraousal_slider_block_block_init() {
	register_block_type( __DIR__ . '/build' );
	register_block_type( __DIR__ . '/build/carousal-single-slide-block' );
}
add_action( 'init', 'create_block_caraousal_slider_block_block_init' );

/**
 * Function to add slick slider scripts.
 *
 * @return void
 */
function add_slick_slider_scripts() {

	wp_enqueue_script(
		'slick-slider-script',
		CARAOUSAL_SLIDER_BLOCK_URL . '/src/slick-slider/slick.min.js',
		array( 'jquery' ),
		'1.0.1',
		true
	);

	wp_enqueue_script(
		'carauosal-script',
		CARAOUSAL_SLIDER_BLOCK_URL . '/src/frontend-slider.js',
		array( 'jquery', 'slick-slider-script' ),
		'1.0.3',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'add_slick_slider_scripts' );
// add_action( 'admin_enqueue_scripts', 'add_slick_slider_scripts' );
