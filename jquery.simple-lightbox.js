/*
 * jquery.simple-lightbox
 * 
 * @author  Chris Jung <campino2k@gmail.com>
 * @license CC-BY-NC-SA
 * 
*/

(function($) {
	$.fn.simpleLightbox = function(options) {
		options = $.extend( {}, $.fn.simpleLightbox.defaults, options );
		return this.each( function(){
			$(this).click( function() {
				$this = $(this);
				$txt = ( $this.attr( 'title' ) ) ? $this.attr( 'title' ) : $this.find( 'img' ).attr( 'title' );
				$ovl = $('<div/>', {
					'id': 'simple-lightbox-overlay',
					'click': function(e){ 
						$(this).remove();
					},
					css: ({
						'height': $(document).height() + 'px',
						'backgroundPosition': 'center ' + ( ($(window).height()/2) + $(document).scrollTop() ) +  'px' // need to overreide the "center center"-CSS-Setting, if any, to center the loading icon in the viewport
					}),
				})
				$ovl.appendTo( 'body' );
				$(document).one( 'keydown',  function(e) { // add "self-destruct"-event	to close the lightbox
					if( e.which == 27 ) {
						$ovl.trigger('click');
					}
				})
				$pic = $( '<img />', {
					'src': $this.attr('href'),
					css: ({'display': 'none'}),
					'load': function(){
						$(this).appendTo( $ovl ).css({
							'top': ( ( $(window).height()/2) - ($pic.height() / 2) + $(document).scrollTop()  ) + "px",
							'left': ( ( $(window).width()/2) - ($pic.width() / 2)  ) + "px"
						}).fadeIn( options.fadeSpeed );
						if( $txt ) {
							$txtdiv = $('<div />', {
								'id': 'simple-lightbox-text',
								'text': $txt
							})
							$txtdiv.appendTo( $ovl ).css({
									'position': 'absolute',
									'zIndex': '1000',
									'top': ( ( $(window).height()/2) + ( $pic.height()/2 ) + $(document).scrollTop() ) + "px",
									'left': ( ( $(window).width()/2) - ( $pic.width() / 2 ) ) + 'px',
								//	'margin': '0 auto',
									'marginTop': '1em',
									'padding': '5px',
									'width': $pic.outerWidth() - 10  + 'px',
									'display': 'none'
							}).fadeIn( options.fadeSpeed )
						}
					},
					'click': function(){
						$(this).parent().trigger('click');
					}
				});
				return false; // prevent link click event
			})
		})
	},
	$.fn.simpleLightbox.defaults = {
		fadeSpeed: 'slow'
	}
})(jQuery);
