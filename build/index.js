!function(){"use strict";var e,l={259:function(){var e=window.wp.blocks,l=window.wp.element,o=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,r=JSON.parse('{"u2":"create-block/caraousal-slider-block"}');(0,e.registerBlockType)(r.u2,{edit:function(e){let{attributes:r,setAttributes:t}=e;const{slideToShow:i,numberOfSlideToScroll:s,sliderAnimationSpeed:c,showSliderNextPrevArrow:d,showDotsNavigation:u,infiniteLoopSlider:m,autoPlaySlider:p,autoPlaySpeed:b,screenWidth:S,slideToShowResponsive:h,numberOfSlideToScrollResponsive:v}=r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:(0,o.__)("Carousal Slider Settings","caraousal-slider-block")},(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Slides to show","caraousal-slider-block"),value:i,onChange:e=>(e=>{t({slideToShow:e})})(e),min:1,max:5}),(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Slides to scroll at a time","caraousal-slider-block"),value:s,onChange:e=>(e=>{t({numberOfSlideToScroll:e})})(e),min:1,max:5}),(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Slide animation speed (ms)","caraousal-slider-block"),value:c,onChange:e=>(e=>{t({sliderAnimationSpeed:e})})(e),min:300,max:1e3}),(0,l.createElement)(n.ToggleControl,{label:(0,o.__)("Prev/Next arrows","caraousal-slider-block"),checked:d,onChange:()=>{t({showSliderNextPrevArrow:!d})}}),(0,l.createElement)(n.ToggleControl,{label:(0,o.__)("Dots navigation","caraousal-slider-block"),checked:u,onChange:()=>{t({showDotsNavigation:!u})}}),(0,l.createElement)(n.ToggleControl,{label:(0,o.__)("Infinite loop sliding","caraousal-slider-block"),checked:m,onChange:()=>{t({infiniteLoopSlider:!m})}}),(0,l.createElement)(n.ToggleControl,{label:(0,o.__)("Autoplay","caraousal-slider-block"),checked:p,onChange:()=>{t({autoPlaySlider:!p})}}),p&&(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Autoplay Speed (ms)","caraousal-slider-block"),value:b,onChange:e=>(e=>{t({autoPlaySpeed:e})})(e),min:1e3,max:1e4})),(0,l.createElement)(n.PanelBody,{title:(0,o.__)("Responsive Slider Settings","caraousal-slider-block")},(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Screen Width (px)","caraousal-slider-block"),value:S,onChange:e=>(e=>{t({screenWidth:e})})(e),min:300,max:2e3}),(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Slides to show","caraousal-slider-block"),value:h,help:(0,o.__)("# of slides to show at a given width","caraousal-slider-block"),onChange:e=>(e=>{t({slideToShowResponsive:e})})(e),min:1,max:5}),(0,l.createElement)(n.RangeControl,{label:(0,o.__)("Slides to scroll at a time","caraousal-slider-block"),value:v,onChange:e=>(e=>{t({numberOfSlideToScrollResponsive:e})})(e),min:1,max:5}))),(0,l.createElement)("div",(0,a.useBlockProps)(),(0,l.createElement)(a.InnerBlocks,{allowedBlocks:["create-block/carousal-single-slide-block"]})))},save:function(e){const{attributes:o}=e,{slideToShow:n,numberOfSlideToScroll:r,sliderAnimationSpeed:t,showSliderNextPrevArrow:i,showDotsNavigation:s,infiniteLoopSlider:c,autoPlaySlider:d,autoPlaySpeed:u,screenWidth:m,slideToShowResponsive:p,numberOfSlideToScrollResponsive:b}=o,S={slidesToShow:n,slidesToScroll:r,speed:t,arrows:i,dots:s,autoplay:d,autoplaySpeed:u,infinite:c},h=JSON.stringify(S),v=a.useBlockProps.save({"data-slick":h});return(0,l.createElement)("div",v,(0,l.createElement)(a.InnerBlocks.Content,null))}})}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.m=l,e=[],a.O=function(l,o,n,r){if(!o){var t=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,s=0;s<o.length;s++)(!1&r||t>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(i=!1,r<t&&(t=r));if(i){e.splice(d--,1);var c=n();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]},a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},function(){var e={826:0,431:0};a.O.j=function(l){return 0===e[l]};var l=function(l,o){var n,r,t=o[0],i=o[1],s=o[2],c=0;if(t.some((function(l){return 0!==e[l]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var d=s(a)}for(l&&l(o);c<t.length;c++)r=t[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},o=self.webpackChunkcaraousal_slider_block=self.webpackChunkcaraousal_slider_block||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))}();var n=a.O(void 0,[431],(function(){return a(259)}));n=a.O(n)}();